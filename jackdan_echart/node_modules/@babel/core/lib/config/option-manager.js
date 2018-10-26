"use strict";

exports.__esModule = true;
exports.default = manageOptions;

var _path = _interopRequireDefault(require("path"));

var context = _interopRequireWildcard(require("../index"));

var _plugin = _interopRequireWildcard(require("./plugin"));

var _merge = _interopRequireDefault(require("lodash/merge"));

var _buildConfigChain = _interopRequireDefault(require("./build-config-chain"));

var _traverse = _interopRequireDefault(require("@babel/traverse"));

var _clone = _interopRequireDefault(require("lodash/clone"));

var _caching = require("./caching");

var _environment = require("./helpers/environment");

var _options = require("./options");

var _files = require("./loading/files");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function manageOptions(opts) {
  return new OptionManager().init(opts);
}

var OptionManager = function () {
  function OptionManager() {
    this.optionDefaults = {};
    this.options = {};
    this.passes = [[]];
  }

  var _proto = OptionManager.prototype;

  _proto.mergeOptions = function mergeOptions(config, pass, envName) {
    var _this = this;

    var plugins = config.plugins.map(function (descriptor) {
      return loadPluginDescriptor(descriptor, envName);
    });
    var presets = config.presets.map(function (descriptor) {
      return {
        preset: loadPresetDescriptor(descriptor, envName),
        pass: descriptor.ownPass ? [] : pass
      };
    });

    if (presets.length > 0) {
      var _passes;

      (_passes = this.passes).splice.apply(_passes, [1, 0].concat(presets.map(function (o) {
        return o.pass;
      }).filter(function (p) {
        return p !== pass;
      })));

      presets.forEach(function (_ref) {
        var preset = _ref.preset,
            pass = _ref.pass;
        var loadedConfig = loadConfig(preset);

        _this.mergeOptions({
          plugins: dedupDescriptors(loadedConfig.plugins),
          presets: dedupDescriptors(loadedConfig.presets)
        }, pass, envName);

        (0, _merge.default)(_this.optionDefaults, normalizeOptions(loadedConfig.options));
      });
    }

    if (plugins.length > 0) {
      pass.unshift.apply(pass, plugins);
    }
  };

  _proto.mergeConfigChain = function mergeConfigChain(chain, envName) {
    var _this2 = this;

    var config = dedupLoadedConfigs(chain.map(function (config) {
      return loadConfig(config);
    }));
    this.mergeOptions({
      plugins: config.plugins,
      presets: config.presets
    }, this.passes[0], envName);
    config.options.forEach(function (opts) {
      (0, _merge.default)(_this2.options, normalizeOptions(opts));
    });
  };

  _proto.init = function init(inputOpts) {
    var args = (0, _options.validate)("arguments", inputOpts);
    var _args$envName = args.envName,
        envName = _args$envName === void 0 ? (0, _environment.getEnv)() : _args$envName,
        _args$cwd = args.cwd,
        cwd = _args$cwd === void 0 ? "." : _args$cwd;

    var absoluteCwd = _path.default.resolve(cwd);

    var configChain = (0, _buildConfigChain.default)(absoluteCwd, args, envName);
    if (!configChain) return null;

    try {
      this.mergeConfigChain(configChain, envName);
    } catch (e) {
      if (!/^\[BABEL\]/.test(e.message)) {
        e.message = "[BABEL] " + (args.filename || "unknown") + ": " + e.message;
      }

      throw e;
    }

    var opts = (0, _merge.default)(this.optionDefaults, this.options);
    opts.babelrc = false;
    opts.plugins = this.passes[0];
    opts.presets = this.passes.slice(1).filter(function (plugins) {
      return plugins.length > 0;
    }).map(function (plugins) {
      return {
        plugins: plugins
      };
    });
    opts.passPerPreset = opts.presets.length > 0;
    opts.envName = envName;
    opts.cwd = absoluteCwd;
    return {
      options: opts,
      passes: this.passes
    };
  };

  return OptionManager;
}();

function normalizeOptions(opts) {
  var options = Object.assign({}, opts);
  delete options.extends;
  delete options.env;
  delete options.plugins;
  delete options.presets;
  delete options.passPerPreset;
  delete options.ignore;
  delete options.only;

  if (options.sourceMap) {
    options.sourceMaps = options.sourceMap;
    delete options.sourceMap;
  }

  return options;
}

var loadConfig = (0, _caching.makeWeakCache)(function (config) {
  var options = config.options;
  var plugins = (config.options.plugins || []).map(function (plugin, index) {
    return createDescriptor(plugin, _files.loadPlugin, config.dirname, {
      index: index,
      alias: config.alias
    });
  });
  assertNoDuplicates(plugins);
  var presets = (config.options.presets || []).map(function (preset, index) {
    return createDescriptor(preset, _files.loadPreset, config.dirname, {
      index: index,
      alias: config.alias,
      ownPass: options.passPerPreset
    });
  });
  assertNoDuplicates(presets);
  return {
    options: options,
    plugins: plugins,
    presets: presets
  };
});

function assertNoDuplicates(items) {
  var map = new Map();

  for (var _iterator = items, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
    var _ref2;

    if (_isArray) {
      if (_i >= _iterator.length) break;
      _ref2 = _iterator[_i++];
    } else {
      _i = _iterator.next();
      if (_i.done) break;
      _ref2 = _i.value;
    }

    var _item = _ref2;
    if (typeof _item.value !== "function") continue;
    var nameMap = map.get(_item.value);

    if (!nameMap) {
      nameMap = new Set();
      map.set(_item.value, nameMap);
    }

    if (nameMap.has(_item.name)) {
      throw new Error(["Duplicate plugin/preset detected.", "If you'd like to use two separate instances of a plugin,", "they neen separate names, e.g.", "", "  plugins: [", "    ['some-plugin', {}],", "    ['some-plugin', {}, 'some unique name'],", "  ]"].join("\n"));
    }

    nameMap.add(_item.name);
  }
}

function dedupLoadedConfigs(items) {
  var options = [];
  var plugins = [];
  var presets = [];

  for (var _iterator2 = items, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
    var _ref3;

    if (_isArray2) {
      if (_i2 >= _iterator2.length) break;
      _ref3 = _iterator2[_i2++];
    } else {
      _i2 = _iterator2.next();
      if (_i2.done) break;
      _ref3 = _i2.value;
    }

    var _item2 = _ref3;
    plugins.push.apply(plugins, _item2.plugins);
    presets.push.apply(presets, _item2.presets);
    options.push(_item2.options);
  }

  return {
    options: options,
    plugins: dedupDescriptors(plugins),
    presets: dedupDescriptors(presets)
  };
}

function dedupDescriptors(items) {
  var map = new Map();
  var descriptors = [];

  for (var _iterator3 = items, _isArray3 = Array.isArray(_iterator3), _i3 = 0, _iterator3 = _isArray3 ? _iterator3 : _iterator3[Symbol.iterator]();;) {
    var _ref4;

    if (_isArray3) {
      if (_i3 >= _iterator3.length) break;
      _ref4 = _iterator3[_i3++];
    } else {
      _i3 = _iterator3.next();
      if (_i3.done) break;
      _ref4 = _i3.value;
    }

    var _item3 = _ref4;

    if (typeof _item3.value === "function") {
      var fnKey = _item3.value;
      var nameMap = map.get(fnKey);

      if (!nameMap) {
        nameMap = new Map();
        map.set(fnKey, nameMap);
      }

      var desc = nameMap.get(_item3.name);

      if (!desc) {
        desc = {
          value: null
        };
        descriptors.push(desc);
        if (!_item3.ownPass) nameMap.set(_item3.name, desc);
      }

      if (_item3.options === false) {
        desc.value = null;
      } else {
        desc.value = _item3;
      }
    } else {
      descriptors.push({
        value: _item3
      });
    }
  }

  return descriptors.reduce(function (acc, desc) {
    if (desc.value) acc.push(desc.value);
    return acc;
  }, []);
}

var loadDescriptor = (0, _caching.makeWeakCache)(function (_ref5, cache) {
  var value = _ref5.value,
      options = _ref5.options,
      dirname = _ref5.dirname,
      alias = _ref5.alias;
  if (options === false) throw new Error("Assertion failure");
  options = options || {};
  var item = value;

  if (typeof value === "function") {
    var api = Object.assign(Object.create(context), {
      cache: cache.simple(),
      env: function env() {
        return cache.using(function (data) {
          return data.envName;
        });
      },
      async: function async() {
        return false;
      }
    });

    try {
      item = value(api, options, dirname);
    } catch (e) {
      if (alias) {
        e.message += " (While processing: " + JSON.stringify(alias) + ")";
      }

      throw e;
    }
  }

  if (!item || typeof item !== "object") {
    throw new Error("Plugin/Preset did not return an object.");
  }

  if (typeof item.then === "function") {
    throw new Error("You appear to be using an async plugin, " + "which your current version of Babel does not support." + "If you're using a published plugin, " + "you may need to upgrade your @babel/core version.");
  }

  return {
    value: item,
    options: options,
    dirname: dirname,
    alias: alias
  };
});

function loadPluginDescriptor(descriptor, envName) {
  if (descriptor.value instanceof _plugin.default) {
    if (descriptor.options) {
      throw new Error("Passed options to an existing Plugin instance will not work.");
    }

    return descriptor.value;
  }

  return instantiatePlugin(loadDescriptor(descriptor, {
    envName: envName
  }), {
    envName: envName
  });
}

var instantiatePlugin = (0, _caching.makeWeakCache)(function (_ref6, cache) {
  var value = _ref6.value,
      options = _ref6.options,
      dirname = _ref6.dirname,
      alias = _ref6.alias;
  var pluginObj = (0, _plugin.validatePluginObject)(value);
  var plugin = Object.assign({}, pluginObj);

  if (plugin.visitor) {
    plugin.visitor = _traverse.default.explode((0, _clone.default)(plugin.visitor));
  }

  if (plugin.inherits) {
    var inheritsDescriptor = {
      name: undefined,
      alias: alias + "$inherits",
      value: plugin.inherits,
      options: options,
      dirname: dirname
    };
    var inherits = cache.invalidate(function (data) {
      return loadPluginDescriptor(inheritsDescriptor, data.envName);
    });
    plugin.pre = chain(inherits.pre, plugin.pre);
    plugin.post = chain(inherits.post, plugin.post);
    plugin.manipulateOptions = chain(inherits.manipulateOptions, plugin.manipulateOptions);
    plugin.visitor = _traverse.default.visitors.merge([inherits.visitor || {}, plugin.visitor || {}]);
  }

  return new _plugin.default(plugin, options, alias);
});

var loadPresetDescriptor = function loadPresetDescriptor(descriptor, envName) {
  return instantiatePreset(loadDescriptor(descriptor, {
    envName: envName
  }));
};

var instantiatePreset = (0, _caching.makeWeakCache)(function (_ref7) {
  var value = _ref7.value,
      dirname = _ref7.dirname,
      alias = _ref7.alias;
  return {
    type: "preset",
    options: (0, _options.validate)("preset", value),
    alias: alias,
    dirname: dirname
  };
});

function createDescriptor(pair, resolver, dirname, _ref8) {
  var index = _ref8.index,
      alias = _ref8.alias,
      ownPass = _ref8.ownPass;
  var name;
  var options;
  var value = pair;

  if (Array.isArray(value)) {
    if (value.length === 3) {
      var _value = value;
      value = _value[0];
      options = _value[1];
      name = _value[2];
    } else {
      var _value2 = value;
      value = _value2[0];
      options = _value2[1];
    }
  }

  var filepath = null;

  if (typeof value === "string") {
    var _resolver = resolver(value, dirname);

    filepath = _resolver.filepath;
    value = _resolver.value;
  }

  if (!value) {
    throw new Error("Unexpected falsy value: " + String(value));
  }

  if (typeof value === "object" && value.__esModule) {
    if (value.default) {
      value = value.default;
    } else {
      throw new Error("Must export a default export when using ES6 modules.");
    }
  }

  if (typeof value !== "object" && typeof value !== "function") {
    throw new Error("Unsupported format: " + typeof value + ". Expected an object or a function.");
  }

  if (filepath !== null && typeof value === "object" && value) {
    throw new Error("Plugin/Preset files are not allowed to export objects, only functions.");
  }

  return {
    name: name,
    alias: filepath || alias + "$" + index,
    value: value,
    options: options,
    dirname: dirname,
    ownPass: ownPass
  };
}

function chain(a, b) {
  var fns = [a, b].filter(Boolean);
  if (fns.length <= 1) return fns[0];
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    for (var _iterator4 = fns, _isArray4 = Array.isArray(_iterator4), _i4 = 0, _iterator4 = _isArray4 ? _iterator4 : _iterator4[Symbol.iterator]();;) {
      var _ref9;

      if (_isArray4) {
        if (_i4 >= _iterator4.length) break;
        _ref9 = _iterator4[_i4++];
      } else {
        _i4 = _iterator4.next();
        if (_i4.done) break;
        _ref9 = _i4.value;
      }

      var _fn = _ref9;

      _fn.apply(this, args);
    }
  };
}