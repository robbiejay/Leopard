import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInsuranceServicesComponent } from './staff-insurance-services.component';

describe('StaffInsuranceServicesComponent', () => {
  let component: StaffInsuranceServicesComponent;
  let fixture: ComponentFixture<StaffInsuranceServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffInsuranceServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInsuranceServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
