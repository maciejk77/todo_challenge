describe('ToDoCtrl', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoCtrl');
  }));

  var tasks = ['Cleaning', 'Shopping', 'Laundry', 'Ironing'];

    it('initialises with a full list', function(){
      expect(ctrl.todoList.tasks).toEqual(tasks);
    });

});

