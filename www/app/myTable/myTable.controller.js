(function() {
  angular
    .module('app')
    .controller('MyTableController', MyTableController);

  MyTableController.$inject = ['$filter', 'getTable','tablesService'];

  function MyTableController($filter, getTable, tablesService) {
    var vm = this;

    vm.dateTime = getTable.dateTime;
    vm.location = getTable.restaurantAddress;
    vm.max = getTable.max;
    vm.name = getTable.restaurantName;
    vm.users = getTable.users;
  }
})();
