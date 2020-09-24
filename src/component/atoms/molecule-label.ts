export class MoleculeLabelController implements ng.IController {

    public model: string;

    constructor() {}

    public $onInit = () => {
        console.log('MoleculeLabelController initialized!');
    }
}

export class MoleculeLabelComponent implements ng.IComponentOptions {
    public bindings = {
        model: '<'
    }
    public controller = MoleculeLabelController;
    public template = require('./molecule-label.html');
}

