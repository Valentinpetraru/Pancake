import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeFundsComponent } from './prize-funds.component';

describe('PrizeFundsComponent', () => {
  let component: PrizeFundsComponent;
  let fixture: ComponentFixture<PrizeFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrizeFundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
