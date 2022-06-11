import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistTokenComponent } from './watchlist-token.component';

describe('WatchlistTokenComponent', () => {
  let component: WatchlistTokenComponent;
  let fixture: ComponentFixture<WatchlistTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchlistTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchlistTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
