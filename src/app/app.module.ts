import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClockDigComponent } from './clock-dig/clock-dig.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockDigComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
