import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupNavBarComponent } from './popup-nav-bar.component';

describe('PopupNavBarComponent', () => {
  let component: PopupNavBarComponent;
  let fixture: ComponentFixture<PopupNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
