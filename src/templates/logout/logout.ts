import ng from "angular";

export class TemplateLogoutController implements ng.IController {

    constructor() {}

    public $onInit = () => {
        console.log('TemplateLoginController initialized!');
    }
}

export class TemplateLogoutComponent implements ng.IComponentOptions {
    public bindings = {
        model: '<'
    }
    public controller = TemplateLogoutController;
    public template = require('./logout.html');
}