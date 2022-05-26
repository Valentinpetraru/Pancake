import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnacardComponent } from './pnacard.component';

describe('PnacardComponent', () => {
  let component: PnacardComponent;
  let fixture: ComponentFixture<PnacardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PnacardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PnacardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
