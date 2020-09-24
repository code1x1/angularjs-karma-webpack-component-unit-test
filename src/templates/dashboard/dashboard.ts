import ng from "angular";

export class TemplateDashboardController implements ng.IController {

    constructor() {}

    public $onInit = () => {
        console.log('TemplateDashboardController initialized!');
    }
}

export class TemplateDashboardComponent implements ng.IComponentOptions {
    public bindings = {
        model: '<'
    }
    public controller = TemplateDashboardController;
    public template = require('./dashboard.html');
}