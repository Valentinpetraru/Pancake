import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPComponent } from './trusted-p.component';

describe('TrustedPComponent', () => {
  let component: TrustedPComponent;
  let fixture: ComponentFixture<TrustedPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
