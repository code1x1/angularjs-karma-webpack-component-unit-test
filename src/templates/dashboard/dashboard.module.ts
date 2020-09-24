import ng from "angular";
import { TemplateDashboardComponent } from "./dashboard";

export const APP_DASHBOARD = ng
  .module("app.dashboard", [])
  .component('templateDashboard', new TemplateDashboardComponent());