myApp.controller("ImagePopupController", imagePopupController);
imagePopupController.$inject = ["$scope", "$timeout"];
function imagePopupController($scope, $timeout) {
  vm = this;
  vm.assets = {};
  vm.small = {};
  $timeout(function(){
    $scope.images = JSON.parse(vm.assets);
    $scope.small = JSON.parse(vm.small);
  }, 200);
}
