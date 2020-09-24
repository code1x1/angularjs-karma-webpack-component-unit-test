import { TransitionService } from "@uirouter/angularjs";
import ng from "angular";

const ROUTES = [];

ROUTES.push(
  {
    name: 'login',
    state: {
      data: {
        authenticate: false
      },
      onEnter: () => {
        console.log('onEnter login');
      },
      url: '/login',
      views: {
        'wrapper@': {
          template: '<template-login></template-login>'
        }
      },
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        return import(/* webpackChunkName: "login.module" */ "./templates/login/login.module")
          .then(mod => $ocLazyLoad.load(mod.APP_LOGIN))
          .catch(err => {
            throw new Error("Template not found Error: " + err);
          });
      }
    }
  },
  {
    name: 'logout',
    state: {
      data: {
        authenticate: false
      },
      onEnter: () => {
        console.log('onEnter login');
      },
      url: '/logout',
      views: {
        'wrapper@': {
          template: '<template-logout></template-logout>'
        }
      },
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        return import(/* webpackChunkName: "logout.module" */ "./templates/logout/logout.module")
          .then(mod => $ocLazyLoad.load(mod.APP_LOGOUT))
          .catch(err => {
            throw new Error("Template not found Error: " + err);
          });
      }
    }
  },
  {
    name: 'dashboard',
    state: {
      data: {
        authenticate: false
      },
      onEnter: () => {
        console.log('onEnter dashboard');
      },
      url: '/dashboard',
      views: {
        'wrapper@': {
          template: '<template-dashboard></template-dashboard>'
        }
      },
      lazyLoad: ($transition$) => {
        const $ocLazyLoad = $transition$.injector().get("$ocLazyLoad");
        return import(/* webpackChunkName: "dashboard.module" */ "./templates/dashboard/dashboard.module")
          .then(mod => $ocLazyLoad.load(mod.APP_DASHBOARD))
          .catch(err => {
            throw new Error("Template not found Error: " + err);
          });
      }
    }
  }
);

ng.module('app').config(['$stateProvider', function initRoutes($stateProvider: ng.ui.IStateProvider) {
  for (const route of ROUTES) {
    $stateProvider.state(route.name, route.state);
  }
}]);