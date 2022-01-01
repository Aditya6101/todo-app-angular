import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme: boolean = false;

  setTheme(e: boolean) {
    this.isDarkTheme = e;
  }
}
