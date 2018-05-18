describe('cryostat', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cryostat')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cryostat", {$scope: $scope});

        });
        describe('cryostatController', function() {

            it('should create a `cryostat` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cryostat');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});