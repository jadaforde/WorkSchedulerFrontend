import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardScreenComponent } from './dash-board-screen.component';

describe('DashBoardScreenComponent', () => {
  let component: DashBoardScreenComponent;
  let fixture: ComponentFixture<DashBoardScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
