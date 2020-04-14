import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttendanceDateComponent } from './view-attendance-date.component';

describe('ViewAttendanceDateComponent', () => {
  let component: ViewAttendanceDateComponent;
  let fixture: ComponentFixture<ViewAttendanceDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttendanceDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttendanceDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
