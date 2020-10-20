import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from '../header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let debugElement: DebugElement;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have routerLink to login', () => {
    const pathToLogin = '/login';
    const routerLinkInstances = debugElement
      .queryAll(By.directive(RouterLinkWithHref))
      .filter((el) => !!el.nativeElement.textContent)
      .map((el) => el.injector.get(RouterLinkWithHref));
    expect(routerLinkInstances.some((link) => link.href.startsWith(pathToLogin))).toBeTruthy();
  });
});
