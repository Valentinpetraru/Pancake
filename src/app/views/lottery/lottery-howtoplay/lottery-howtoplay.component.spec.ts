import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryHowtoplayComponent } from './lottery-howtoplay.component';

describe('LotteryHowtoplayComponent', () => {
  let component: LotteryHowtoplayComponent;
  let fixture: ComponentFixture<LotteryHowtoplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotteryHowtoplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryHowtoplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
