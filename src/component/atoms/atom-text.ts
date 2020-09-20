export class AtomTextController implements ng.IController {

    public model: string;

    constructor() {}

    public $onInit = () => {
        console.log('AtomTextController initialized!');
    }
}

export class AtomTextComponent implements ng.IComponentOptions {
    public bindings = {
        model: '<'
    }
    public controller = AtomTextController;
    public template = require('./atom-text.html');
}

