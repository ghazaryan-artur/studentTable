import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaculty2Component } from './add-faculty.component';

describe('AddFaculty2Component', () => {
  let component: AddFaculty2Component;
  let fixture: ComponentFixture<AddFaculty2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFaculty2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFaculty2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
