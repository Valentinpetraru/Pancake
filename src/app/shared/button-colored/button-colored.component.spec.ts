import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonColoredComponent } from './button-colored.component';

describe('ButtonColoredComponent', () => {
  let component: ButtonColoredComponent;
  let fixture: ComponentFixture<ButtonColoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonColoredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonColoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
