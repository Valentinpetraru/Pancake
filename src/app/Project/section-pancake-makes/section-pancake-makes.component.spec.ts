import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPancakeMakesComponent } from './section-pancake-makes.component';

describe('SectionPancakeMakesComponent', () => {
  let component: SectionPancakeMakesComponent;
  let fixture: ComponentFixture<SectionPancakeMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPancakeMakesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionPancakeMakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
