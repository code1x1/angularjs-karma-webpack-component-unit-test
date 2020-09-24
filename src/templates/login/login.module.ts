import ng from "angular";
import { TemplateLoginComponent } from "./login";

export const APP_LOGIN = ng
  .module('app.login', [])
  .component('templateLogin', new TemplateLoginComponent())