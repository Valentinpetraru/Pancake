import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfoMainComponent } from './ifo-main.component';

describe('IfoMainComponent', () => {
  let component: IfoMainComponent;
  let fixture: ComponentFixture<IfoMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfoMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
