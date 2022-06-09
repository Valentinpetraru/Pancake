import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfoCardsComponent } from './ifo-cards.component';

describe('IfoCardsComponent', () => {
  let component: IfoCardsComponent;
  let fixture: ComponentFixture<IfoCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfoCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfoCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
