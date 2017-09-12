import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { NewPeopleListComponent } from './new-people-list/new-people-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    NewPeopleListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
