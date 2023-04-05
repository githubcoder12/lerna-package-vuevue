import Button from "@lpackage/button";
import Icon from "@lpackage/icon";
import { App } from "vue";
const components = [Button, Icon];
const install = (app) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};
export { Button };
export default { install, components };
