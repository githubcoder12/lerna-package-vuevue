// 这是icon的导出，提供给全局注册
import icon from "./lib/button.vue";
import { App } from "vue";
icon.install = (app) => {
  app.component(icon.name, icon);
};
export default icon;
