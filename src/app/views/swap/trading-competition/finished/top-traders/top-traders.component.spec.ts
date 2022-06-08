import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTradersComponent } from './top-traders.component';

describe('TopTradersComponent', () => {
  let component: TopTradersComponent;
  let fixture: ComponentFixture<TopTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTradersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
