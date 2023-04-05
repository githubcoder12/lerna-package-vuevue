// 这是button的导出，提供给全局注册
import button from "./lib/button.vue";
import { App } from "vue";
button.install = (app) => {
  app.component(button.name, button);
};
export default button;
