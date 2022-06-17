import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLiquidityComponent } from './chart-liquidity.component';

describe('ChartLiquidityComponent', () => {
  let component: ChartLiquidityComponent;
  let fixture: ComponentFixture<ChartLiquidityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLiquidityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLiquidityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
