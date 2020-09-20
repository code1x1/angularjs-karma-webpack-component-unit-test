import '@uirouter/angularjs';

import * as ng from 'angular';

import { StateProvider } from '@uirouter/angularjs';

import { AtomTextComponent } from './component/atoms/atom-text';
import { STATE } from './states';

export const app = ng.module('app', ['ui.router']);

app.component('atomText', new AtomTextComponent());


app.config(($stateProvider: StateProvider) => {
    for (const state of STATE) {
        $stateProvider = $stateProvider.state(state);
    }
});