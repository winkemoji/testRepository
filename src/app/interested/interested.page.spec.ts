import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestedPage } from './interested.page';

describe('InterestedPage', () => {
  let component: InterestedPage;
  let fixture: ComponentFixture<InterestedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
