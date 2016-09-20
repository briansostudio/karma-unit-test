'use strict';

//
// TODO: Rewrite todo_test.js to achieve 100% statement/branch coverage
//

describe('TodoApp module', function() {

   describe('TODO app Unit Test', function() {
     var controller;
     beforeEach(module('todoApp'));
     beforeEach(inject(function($rootScope, $controller){
       controller = $controller('TodoListController', {});
     }));


		  it('Initialization test', function() {
        expect(controller.todos.length).toEqual(2);
		  });

		  it('Add item to TODO list test', function() {
          var testString = "testing"
          controller.todoText = testString;
          controller.addTodo();
			     expect(controller.todos[controller.todos.length - 1].text).toEqual(testString);
		  });

      it('Remove item from TODO list test', function(){
          var testString = "testing"
          controller.todoText = testString;
          controller.addTodo();
          var test = controller.todos.splice(controller.todos.length-1, 1);
          expect(test[0].text).toEqual(testString);
      });

      it('Remaining item test 1', function(){
        for (var i = 0; i < controller.todos.length; i++) {
          controller.todos[i].done = true;
        }
        expect(controller.remaining()).toEqual(0);
      });

      it('Remaining item test 2', function(){
        for (var i = 0; i < controller.todos.length; i++) {
          controller.todos[i].done = true;
        }
        var testString = "testing"
        controller.todoText = testString;
        controller.addTodo();
        expect(controller.remaining()).toEqual(1);
      });

		  it('Archive items test', function() {
          for (var i = 0; i < controller.todos.length; i++) {
            controller.todos[i].done = true;
          }
          var testString = "testing"
          controller.todoText = testString;
          controller.addTodo();
          controller.archive();
           expect(controller.todos.length).toEqual(1);
		  });

   });



});
