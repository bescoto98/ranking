import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalListRootComponent } from './global-list-root.component';

describe('GlobalListRootComponent', () => {
  let component: GlobalListRootComponent;
  let fixture: ComponentFixture<GlobalListRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalListRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalListRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
