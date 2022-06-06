import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTokensTableComponent } from './top-tokens-table.component';

describe('TopTokensTableComponent', () => {
  let component: TopTokensTableComponent;
  let fixture: ComponentFixture<TopTokensTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopTokensTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTokensTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
