import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCakeMakesComponent } from './section-cake-makes.component';

describe('SectionCakeMakesComponent', () => {
  let component: SectionCakeMakesComponent;
  let fixture: ComponentFixture<SectionCakeMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCakeMakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCakeMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
