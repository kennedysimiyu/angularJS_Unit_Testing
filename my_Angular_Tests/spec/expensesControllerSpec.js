// test for the expenses controller
describe('expensesController', function(){

    // the controllerConstructor and scope variables to be used in creating a controller environment for our test.
	var $controllerConstructor;
    var scope;

    beforeEach(module('app'));
	
// creating a controller and insntatiating a new rootscope for our test before each test starts.
    beforeEach(inject(function($controller, $rootScope){
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
    }));

// our actual test asserting on the expenses items number
    it('should have three expense items', function(){
        var ctrl = $controllerConstructor('expensesController', {$scope:scope});
        expect(ctrl.expenseItems.length).toBe(3);
    })

})