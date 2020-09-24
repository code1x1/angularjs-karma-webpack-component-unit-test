import ng from 'angular';

describe("Molecule Label", () => {
  beforeEach(ng.mock.module("app"));

  let element;
  let scope;
  let model = "Hello World";
  beforeEach(
    ng.mock.inject(
      ($rootScope: ng.IRootScopeService, $compile: ng.ICompileService, $httpBackend: ng.IHttpBackendService) => {
        scope = $rootScope.$new(true);
        element = ng.element('<molecule-label model="model"></molecule-label>');
        element = $compile(element)(scope);
        scope.model = model;
        scope.$apply();
      }
    )
  );

  it("should render the text", function () {
    expect(element).toBeDefined();
    var div = element.find("atom-text");
    expect(div.text()).toContain(model);
  });
});
