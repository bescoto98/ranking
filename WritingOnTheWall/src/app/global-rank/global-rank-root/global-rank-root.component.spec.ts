import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalRankRootComponent } from './global-rank-root.component';

describe('GlobalRankRootComponent', () => {
  let component: GlobalRankRootComponent;
  let fixture: ComponentFixture<GlobalRankRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalRankRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalRankRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
