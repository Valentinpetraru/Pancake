import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfoCakeComponent } from './ifo-cake.component';

describe('IfoCakeComponent', () => {
  let component: IfoCakeComponent;
  let fixture: ComponentFixture<IfoCakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IfoCakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IfoCakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
