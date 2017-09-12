import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPeopleListComponent } from './new-people-list.component';

describe('NewPeopleListComponent', () => {
  let component: NewPeopleListComponent;
  let fixture: ComponentFixture<NewPeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPeopleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
