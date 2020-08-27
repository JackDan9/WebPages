# Egg.js
## Egg.js 是什么?
- **Egg.js为企业级框架和应用而生**, 我们希望由Egg.js孕育出更多上层框架, 帮助开发团队和开发人员降低开发和维护成本。

> 注: Egg.js缩写为Egg

## 设计原则
- 我们深知企业级应用在追求规范和共建的同时, 还需要考虑如何平很不同团队之间的差异, 求同存异。所以我们没有选择社区常见框架的大集市模式(集成如数据库、模板引擎、前端框架等功能), 而是专注于提供Web开发的核心功能和一套灵活可扩展的插件机制。
- 我们不会做出技术选型, 因为固定的技术选型会使框架的扩展性变差, 无法满足各种定制需求。
- 通过Egg, 团队的架构师和技术负责人可以非常容易地基于自身的技术架构在Egg基础上扩展出适合自身业务场景的框架。

- Egg的插件机制有很高的可扩展性, **一个插件只做一件事**(比如[Numjucks](https://mozilla.github.io/nunjucks)模板封装成了[egg-view-numjucks](https://github.com/eggjs/egg-view-nunjucks)、MySQL数据库封装成了[egg-mysql](https://github.com/eggjs/egg-mysql))。Egg通过框架聚合这些插件, 并根据自己的业务场景定制配置, 这样应用的开发成本就变得很低。

- Egg奉行[**约定优于配置**], 按照[一套统一的约定](https://eggjs.org/zh-cn/advanced/loader.html)进行应用开发, 团队内部采用这种方式可以减少开发人员的学习成本，开发人员不再事[钉子], 可以流动起来。没有约定的团队, 沟通成本是非常高的, 比如有人会按目录分栈而其他人按目录分功能, 开发者认知不一致很容易犯错。但约定不等于扩展性差, 相反Egg有很高的扩展性, 可以按照团队的约定定制框架。使用[Loader](https://eggjs.org/zh-cn/advanced/loader.html)可以让框架根据不同的环境定义默认配置, 还可以覆盖Egg的默认约定。

## 于社区框架的差异

- [Express](http://expressjs.com/)是Node.js社区广泛使用的框架, 简单且扩展性强, 非常适合做个人项目。但框架本身缺少约定, 标准的MVC模型会有各种千奇百怪的写法。Egg按照约定进行开发, 奉行[约定优于配置], 团队协作成本低。
- [Sails](https://sailsjs.com/)是和Egg一样奉行[约定优于配置]的框架, 扩展性也非常好。但是相比Egg, [Sails](https://sailsjs.com/)支持Blueprint REST API、[WaterLine](https://github.com/balderdashy/waterline)这样可扩展的ORM、前端集成、WebSocket等, 但这些功能都是由[Sails](https://sailsjs.com/)提供的。而Egg不直接提供功能, 只是集成各种功能插件, 比如实现egg-blueprint, egg-waterline等这样的插件, 再使用sails-egg框架这些插件就可以替代Sails了。

## 特性

- 提供基于Egg[定制上层框架](https://eggjs.org/zh-cn/advanced/framework.html)的能力
- 高度可扩展的[插件机制](https://eggjs.org/zh-cn/basics/plugin.html)
- 内置[多进程管理](https://eggjs.org/zh-cn/advanced/cluster-client.html)
- 基于[Koa](https://koajs.com/)开发, 性能优异
- 框架稳定, 测试覆盖率高
- [渐进式开发](https://eggjs.org/zh-cn/tutorials/progressive.html)

------

> Thinking in JackDan
