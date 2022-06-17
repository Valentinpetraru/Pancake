import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPoolsTableComponent } from './top-pools-table.component';

describe('TopPoolsTableComponent', () => {
  let component: TopPoolsTableComponent;
  let fixture: ComponentFixture<TopPoolsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPoolsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPoolsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
