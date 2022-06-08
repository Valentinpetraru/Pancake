import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatataInSecondsComponent } from './patata-in-seconds.component';

describe('PatataInSecondsComponent', () => {
  let component: PatataInSecondsComponent;
  let fixture: ComponentFixture<PatataInSecondsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatataInSecondsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatataInSecondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
