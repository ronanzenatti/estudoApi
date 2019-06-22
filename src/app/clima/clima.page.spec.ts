import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClimaPage } from './clima.page';

describe('ClimaPage', () => {
  let component: ClimaPage;
  let fixture: ComponentFixture<ClimaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClimaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
