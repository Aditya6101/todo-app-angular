import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() themeEmitter = new EventEmitter<boolean>();
  @Input() isDarkTheme: boolean = false;

  ngOnInit(): void {}

  changeTheme(e: boolean) {
    this.themeEmitter.emit(e);
  }
}
