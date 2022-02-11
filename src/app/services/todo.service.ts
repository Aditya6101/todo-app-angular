import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private url = 'http://localhost:5000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addTask(task: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, task, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = `${this.url}/${todo.id}`;
    return this.http.delete<Todo>(url);
  }
}
