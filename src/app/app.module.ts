import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
