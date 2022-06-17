import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsThreeComponent } from './cards-three.component';

describe('CardsThreeComponent', () => {
  let component: CardsThreeComponent;
  let fixture: ComponentFixture<CardsThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
