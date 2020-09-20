import ng from 'angular';

const template = require('./atom-text.html');

describe("Users factory", () => {
  beforeEach(ng.mock.module("app"));

  let element;
  let scope;
  let model = "Hello World";
  beforeEach(
    ng.mock.inject(
      ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService, $httpBackend: ng.IHttpBackendService) => {
        scope = $rootScope.$new(true);
        $httpBackend. expectGET(() => true).respond(200, template);
        element = ng.element('<atom-text model="model"></atom-text>');
        element = $compile(element)(scope);
        scope.model = model;
        scope.$apply();
      }
    )
  );

  it("should render the text", function () {      
    expect(element).toBeDefined();
    var div = element.find("div");
    expect(div.text()).toContain(model);
  });
});
