# JackdanBreadcrumb

## 搭建步骤

### 安装angular/cli
```javascript
[root@localhost ~]# cnpm install -g @angular/cli
[root@localhost ~]#
```

### 启动一个新的项目

```javascript
// 错误示范, 项目名不能用下划线
[root@localhost ~]# ng new jackdan_breadcrumb
Project name "jackdan_breadcrumb" is not valid. New project names must start with a letter, and must contain only alphanumeric characters or dashes. When adding a dash the segment after the dash must also start with a letter.
jackdan_breadcrumb
// 正确示范
[root@localhost ~]# ng new jackdan-breadcrumb
CREATE jackdan-breadcrumb/angular.json (3631 bytes)
CREATE jackdan-breadcrumb/package.json (1208 bytes)
CREATE jackdan-breadcrumb/README.md (1026 bytes)
CREATE jackdan-breadcrumb/tsconfig.json (458 bytes)
CREATE jackdan-breadcrumb/tslint.json (3185 bytes)
CREATE jackdan-breadcrumb/.editorconfig (274 bytes)
CREATE jackdan-breadcrumb/.gitignore (631 bytes)
CREATE jackdan-breadcrumb/.browserslistrc (703 bytes)
CREATE jackdan-breadcrumb/karma.conf.js (1435 bytes)
CREATE jackdan-breadcrumb/tsconfig.app.json (287 bytes)
CREATE jackdan-breadcrumb/tsconfig.spec.json (333 bytes)
CREATE jackdan-breadcrumb/src/favicon.ico (948 bytes)
CREATE jackdan-breadcrumb/src/index.html (303 bytes)
CREATE jackdan-breadcrumb/src/main.ts (372 bytes)
CREATE jackdan-breadcrumb/src/polyfills.ts (2826 bytes)
CREATE jackdan-breadcrumb/src/styles.css (80 bytes)
CREATE jackdan-breadcrumb/src/test.ts (753 bytes)
CREATE jackdan-breadcrumb/src/assets/.gitkeep (0 bytes)
CREATE jackdan-breadcrumb/src/environments/environment.prod.ts (51 bytes)
CREATE jackdan-breadcrumb/src/environments/environment.ts (662 bytes)
CREATE jackdan-breadcrumb/src/app/app.module.ts (314 bytes)
CREATE jackdan-breadcrumb/src/app/app.component.html (25725 bytes)
CREATE jackdan-breadcrumb/src/app/app.component.spec.ts (976 bytes)
CREATE jackdan-breadcrumb/src/app/app.component.ts (222 bytes)
CREATE jackdan-breadcrumb/src/app/app.component.css (0 bytes)
CREATE jackdan-breadcrumb/e2e/protractor.conf.js (904 bytes)
CREATE jackdan-breadcrumb/e2e/tsconfig.json (274 bytes)
CREATE jackdan-breadcrumb/e2e/src/app.e2e-spec.ts (669 bytes)
CREATE jackdan-breadcrumb/e2e/src/app.po.ts (274 bytes)
- Installing packages (npm)...
√ Packages installed successfully.
    Directory is already under version control. Skipping initialization of git.
[root@localhost ~]# 
```

### 引入ng-zorro-antd
```javascript
[root@localhost ~]# ng add ng-zorro-antd
// 找不到兼容的包。使用“最新”的包。
Unable to find compatible package.  Using 'latest'.
Package has unmet peer dependencies. Adding the package may not succeed.
Installing packages for tooling via npm.
Installed packages for tooling via npm.
UPDATE package.json (1239 bytes)
UPDATE src/app/app.component.html (276 bytes)
- Installing packages (npm)...
√ Packages installed successfully.
UPDATE src/app/app.module.ts (816 bytes)
UPDATE angular.json (3766 bytes)

[root@localhost ~]# 
```  

------

> Thinking in JackDan

------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
