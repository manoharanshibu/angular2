import { Component, OnInit } from '@angular/core';
import { NewPerson } from '../new-person'

@Component({
  selector: 'app-new-people-list',
  template: `
    <ul>
        <li *ngFor="let newperson of newPeople">{{newperson.name}}</li>
    </ul>
  `,
  styleUrls: ['./new-people-list.component.css']
})
export class NewPeopleListComponent implements OnInit {

  newPeople: NewPerson[] = [
    {name: 'a'},
    {name: 'b'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
