import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  template: `
    <ul>
      <li *ngFor="let person of people">{{person.name}}</li>
    </ul>
  `,
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  people:Person[] = [
    {name: 'Shibu', age: 22},
    {name: 'Rejitha', age: 21}
  ] 

  constructor() { }

  ngOnInit() {
  }

}
