var toDoApp = angular.module('toDoApp', []);
function ToDoController($scope) {
  $scope.tasks = [
    { todo: 'Cleaning', completed: false }, 
    { todo: 'Shopping', completed: false }, 
    { todo: 'Laundry', completed: false },
    { todo: 'Ironing', completed: false }
  ];
    
  $scope.getToDoCount = function () {
    return $scope.tasks.length;
  };
    
    
  $scope.addToDo = function () {
    $scope.tasks.push({todo:$scope.formToDoText, completed:false});
    $scope.formToDoText = '';
  };
    
  $scope.clearAll = function () {
      $scope.tasks = _.filter($scope.tasks, function(todo){
          return todo.completed;
      });
  };

}

toDoApp.controller('ToDoController', ToDoController);


