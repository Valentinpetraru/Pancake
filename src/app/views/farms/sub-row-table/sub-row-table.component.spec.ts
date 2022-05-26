import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubRowTableComponent } from './sub-row-table.component';

describe('SubRowTableComponent', () => {
  let component: SubRowTableComponent;
  let fixture: ComponentFixture<SubRowTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubRowTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubRowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
