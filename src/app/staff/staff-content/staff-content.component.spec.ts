import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffContentComponent } from './staff-content.component';

describe('StaffContentComponent', () => {
  let component: StaffContentComponent;
  let fixture: ComponentFixture<StaffContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
