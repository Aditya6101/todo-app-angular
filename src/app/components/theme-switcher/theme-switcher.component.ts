import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  @Input() isDarkTheme: boolean = false;
  @Output() themeEmitter = new EventEmitter<boolean>();
  icon: string = 'moon';
  iconPath: string = '../../../assets/images/icon-moon.svg';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isDarkTheme = !this.isDarkTheme;
    this.icon = this.isDarkTheme ? 'sun' : 'moon';
    this.iconPath = `../../../assets/images/icon-${this.icon}.svg`;
    this.themeEmitter.emit(this.isDarkTheme);
  }
}
