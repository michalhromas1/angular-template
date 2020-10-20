import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Error404Component } from '../404.component';

describe('HomeComponent', () => {
  let fixture: ComponentFixture<Error404Component>;
  let debugElement: DebugElement;
  let component: Error404Component;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Error404Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Error404Component);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
