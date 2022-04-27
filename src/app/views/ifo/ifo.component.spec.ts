import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfoComponent } from './ifo.component';

describe('IfoComponent', () => {
  let component: IfoComponent;
  let fixture: ComponentFixture<IfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
