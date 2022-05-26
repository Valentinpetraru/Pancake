import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradingCompetitionComponent } from './trading-competition.component';

describe('TradingCompetitionComponent', () => {
  let component: TradingCompetitionComponent;
  let fixture: ComponentFixture<TradingCompetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradingCompetitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradingCompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
