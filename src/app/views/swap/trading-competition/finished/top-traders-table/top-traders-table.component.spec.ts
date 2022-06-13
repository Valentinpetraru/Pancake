import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTradersTableComponent } from './top-traders-table.component';

describe('TopTradersTableComponent', () => {
  let component: TopTradersTableComponent;
  let fixture: ComponentFixture<TopTradersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTradersTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTradersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
