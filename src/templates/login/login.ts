import ng from "angular";

export class TemplateLoginController implements ng.IController {

    constructor() {}

    public $onInit = () => {
        console.log('TemplateLoginController initialized!');
    }
}

export class TemplateLoginComponent implements ng.IComponentOptions {
    public bindings = {
        expired: '<'
    }
    public controller = TemplateLoginController;
    public template = require('./login.html');
}