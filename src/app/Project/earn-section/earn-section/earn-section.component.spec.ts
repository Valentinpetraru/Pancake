import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnSectionComponent } from './earn-section.component';

describe('EarnSectionComponent', () => {
  let component: EarnSectionComponent;
  let fixture: ComponentFixture<EarnSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarnSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
