(function(){
    'use strict'
// expenses controller
    angular.module('app')
        .controller('expensesController', ['expensesDataService', expensesController]);

    function expensesController(expensesDataService){
// capturing the this scope and assigning it to vm
        var vm = this;

        vm.activate = activate;
        vm.expenseItems = [];

        activate();
// a function allowing as to activate the expenses data service items
        function activate(){
            vm.expenseItems = expensesDataService.getExpenses();
        }
    }

})();