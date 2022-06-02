import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrustedPageComponent } from './trusted-page.component';

describe('TrustedPageComponent', () => {
  let component: TrustedPageComponent;
  let fixture: ComponentFixture<TrustedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrustedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrustedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
