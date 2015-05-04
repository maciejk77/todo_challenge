var toDoApp = angular.module('toDoApp', []);
function ToDoController($scope) {
  $scope.tasks = [
    { toDoItem: 'Cleaning' }, 
    { toDoItem: 'Shopping' }, 
    { toDoItem: 'Laundry' },
    { toDoItem: 'Ironing' }
  ]
}
toDoApp.controller('ToDoController', ToDoController);
