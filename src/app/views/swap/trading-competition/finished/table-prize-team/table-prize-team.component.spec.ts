import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrizeTeamComponent } from './table-prize-team.component';

describe('TablePrizeTeamComponent', () => {
  let component: TablePrizeTeamComponent;
  let fixture: ComponentFixture<TablePrizeTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablePrizeTeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrizeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
