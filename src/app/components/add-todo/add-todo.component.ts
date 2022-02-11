import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  todos: Todo[] = [];

  inputValue: string = '';

  constructor(private service: TodoService) {}

  ngOnInit(): void {}

  // function to handle form submit event
  onSubmit(): void {
    if (this.inputValue === '') {
      alert('Please enter a todo');
      return;
    }

    const newTodo: Todo = {
      id: uuidv4(),
      text: this.inputValue,
      completed: false,
    };

    // get all todos
    this.service.getTodos().subscribe((todos) => (this.todos = todos));
    // add new todo
    this.service.addTask(newTodo).subscribe((todo) => this.todos.push(newTodo));
    this.inputValue = '';
  }
}
