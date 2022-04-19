import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPredictionComponent } from './card-prediction.component';

describe('CardPredictionComponent', () => {
  let component: CardPredictionComponent;
  let fixture: ComponentFixture<CardPredictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPredictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
