describe('cryostatOld', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cryostatOld')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cryostatOld", {$scope: $scope});

        });
        describe('cryostatOldController', function() {

            it('should create a `cryostatOld` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cryostatOld');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});