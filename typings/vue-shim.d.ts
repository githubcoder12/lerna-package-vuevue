//解析.vue
//ts中的声明
//vue2： Vue.use() install
//vue3:  app.use() install
//import from 都执行以下代码
// declare module "*.vue" {
//   import { defineComponent } from "vue";
//   import Vue from "vue";
//   export default Vue;
//   const component: ReturnType<typeof defineComponent> & {
//     install(app: App): void;
//   };
//   //导出组件
//   export default component;
// }
// declare module "*.vue" {
//   import { DefineComponent } from "vue";
//   const component: DefineComponent<{}, {}, any>;
//   export default component;
// }

// declare module "*.vue" {

//   const component: ReturnType<typeof defineComponent> & {
//      install(app: App): void;
//   export default component;
// }

declare module "*.vue" {
  import { defineComponent, App } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
    components: Array<[]>;
  };
  export default component;
}
