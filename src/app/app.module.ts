import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotepadComponent } from './notepad/notepad.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    NotepadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
