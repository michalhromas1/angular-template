import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../components/header/header.component';
import { CoreComponent } from '../core.component';

describe('CoreComponent', () => {
  let fixture: ComponentFixture<CoreComponent>;
  let debugElement: DebugElement;
  let component: CoreComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CoreComponent, HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have page header', () => {
    const header = debugElement.query(By.directive(HeaderComponent));
    expect(header).toBeTruthy();
  });
});
