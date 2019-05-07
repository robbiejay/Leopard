import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffActivitiesComponent } from './staff-activities.component';

describe('StaffActivitiesComponent', () => {
  let component: StaffActivitiesComponent;
  let fixture: ComponentFixture<StaffActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
