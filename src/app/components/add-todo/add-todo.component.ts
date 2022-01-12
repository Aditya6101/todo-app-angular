import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  inputValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  // function to handle form submit event
  handleSubmit(): void {
    if (this.inputValue === '') {
      alert('Please enter a todo');
      return;
    }
    console.log(this.inputValue);
    this.inputValue = '';
  }
}
