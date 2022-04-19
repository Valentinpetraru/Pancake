import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpetualComponent } from './perpetual.component';

describe('PerpetualComponent', () => {
  let component: PerpetualComponent;
  let fixture: ComponentFixture<PerpetualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerpetualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpetualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
