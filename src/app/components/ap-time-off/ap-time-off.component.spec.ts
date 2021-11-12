import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApTimeOffComponent } from './ap-time-off.component';

describe('ApTimeOffComponent', () => {
  let component: ApTimeOffComponent;
  let fixture: ComponentFixture<ApTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApTimeOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
