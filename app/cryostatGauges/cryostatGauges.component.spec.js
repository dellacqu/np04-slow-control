describe('cryostatGauges', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('cryostatGauges')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("cryostatGauges", {$scope: $scope});

        });
        describe('cryostatGaugesController', function() {

            it('should create a `cryostatGauges` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('cryostatGauges');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});