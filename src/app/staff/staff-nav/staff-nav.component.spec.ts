import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffNavComponent } from './staff-nav.component';

describe('StaffNavComponent', () => {
  let component: StaffNavComponent;
  let fixture: ComponentFixture<StaffNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
