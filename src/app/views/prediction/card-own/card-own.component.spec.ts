import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOwnComponent } from './card-own.component';

describe('CardOwnComponent', () => {
  let component: CardOwnComponent;
  let fixture: ComponentFixture<CardOwnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOwnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
