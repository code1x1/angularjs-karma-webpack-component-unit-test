import ng from "angular";
import { TemplateLogoutComponent } from "./logout";

export const APP_LOGOUT = ng
  .module("app.logout", [])
  .component('templateLogout', new TemplateLogoutComponent());