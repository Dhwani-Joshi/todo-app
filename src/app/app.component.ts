import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My todos';
  todos = [{ label: 'bring milk', done: false, priority: 2},
    { label: 'cat is cute', done: true, priority: 1},
    { label: 'I am good', done: false, priority: 3},
    { label: 'take a shot', done: true, priority: 4}
  ];

  addTodo(newTodoLabel) {
    const newTodo = {
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);
  }
  deleteTodo(todo) {
    this.todos = this.todos.filter(t => t.label !== todo.label );
  }
}

