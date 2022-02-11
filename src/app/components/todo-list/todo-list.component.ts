import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  todos: Todo[] = [];

  constructor(private service: TodoService) {}

  deleteTodo(todo: Todo) {
    this.service
      .deleteTodo(todo)
      .subscribe(
        () => (this.todos = this.todos.filter((t) => t.id !== todo.id))
      );
  }

  ngOnInit(): void {
    this.service.getTodos().subscribe((todos) => {
      this.todos = todos;
      console.log(this.todos);
    });
  }
}
