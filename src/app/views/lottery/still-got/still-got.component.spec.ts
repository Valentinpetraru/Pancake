import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StillGotComponent } from './still-got.component';

describe('StillGotComponent', () => {
  let component: StillGotComponent;
  let fixture: ComponentFixture<StillGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StillGotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StillGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
