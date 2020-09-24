import '@uirouter/angularjs';
import 'oclazyload';


import * as ng from 'angular';
import { AtomTextComponent } from './component/atoms/atom-text';
import { MoleculeLabelComponent } from './component/atoms/molecule-label';

export const app = ng.module('app', ['ui.router', 'oc.lazyLoad']);

app.config(['$ocLazyLoadProvider', ($ocLazyLoadProvider) => {
    $ocLazyLoadProvider.config({
        debug: true,

    })
}])

app.config(($locationProvider) => {
    $locationProvider.html5Mode(true);
})
app.run((
    $state: ng.ui.IStateService) => {
    $state.go('login', { expired: true });
})

app.component('atomText', new AtomTextComponent());
app.component('moleculeLabel', new MoleculeLabelComponent());

require('./states');