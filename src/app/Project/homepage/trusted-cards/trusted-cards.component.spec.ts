import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedCardsComponent } from './trusted-cards.component';

describe('TrustedCardsComponent', () => {
  let component: TrustedCardsComponent;
  let fixture: ComponentFixture<TrustedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
