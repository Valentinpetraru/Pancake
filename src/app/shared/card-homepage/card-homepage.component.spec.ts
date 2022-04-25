import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardHomepageComponent } from './card-homepage.component';

describe('CardHomepageComponent', () => {
  let component: CardHomepageComponent;
  let fixture: ComponentFixture<CardHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
