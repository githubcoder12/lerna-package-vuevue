# 1.安装 git

# 2.安装 lerna

## npm install --global lerna

# 3.初始化一个 git 文件

## git init lerna-repo && cd lerna-repo

# 4.用 lerna 初始化包的内容：生成 packages 目录

## lerna init

# 5.配置 lerna.json

# 6.yarn install

# 7.开发组件 lerna create LButton

## install 单独注册组件

### 每一个组件目录下，创建一个 index.ts：vue3 是 app，vue2 是 Vue

import button from "./lib/button.vue";
import { App } from "vue";
button.install = (app) => {
app.component(button.name, button);
};
export default button;

# 8.配置 ts

## 解析 ts 中的 vue 文件

# 9.安装 ts

## yarn add typescript -W(所有目录而不是当前 LButton 包)

# 10.配置 ts

## npx tsc --init（自动生成 tsconfig.json）

# 11.创建包出口目录

## 在 lpackage 中代码：（1）全局注册组件 （2）按需导出和全部导出

# 12.配置 package.json 打包属性

## "build": "webpack --config ./build/webpack.config.js"

# 13.根据 package.json 中创建的 build 目录，配置 webpack.config.js

## (1)配置入口目录../packages/lpackage/index.ts

## (2)配置 vue-loader 插件，externals 去掉 vue 的解析

<!-- import Button from "@lpackage/button";
import Icon from "@lpackage/icon";
import { App } from "vue";
const components = [Button, Icon];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { Button };
export default { install, components }; -->

<!-- 示例： -->
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <div id="lbutton"></div>
    <script type="text/javascript" src="./lib/index.js"></script>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script type="module">
      const { Button: lButton } = lpackage;
    //   console.log(lpackage, lpackage.default.components[0], lButton);
      const { createApp } = Vue;
      createApp(lButton).mount("#lbutton");
    </script>
  </body>
</html>
