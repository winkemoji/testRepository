import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySelfPage } from './my-self.page';

describe('MySelfPage', () => {
  let component: MySelfPage;
  let fixture: ComponentFixture<MySelfPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySelfPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySelfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
