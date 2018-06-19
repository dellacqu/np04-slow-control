describe('tInternal', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('tInternal')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("tInternal", {$scope: $scope});

        });
        describe('tInternalController', function() {

            it('should create a `tInternal` model with 1 natalie', inject(function($componentController) {
                let ctrl = $componentController('tInternal');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});