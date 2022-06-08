import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryTimerComponent } from './lottery-timer.component';

describe('LotteryTimerComponent', () => {
  let component: LotteryTimerComponent;
  let fixture: ComponentFixture<LotteryTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
