import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffWhatsNewComponent } from './staff-whats-new.component';

describe('StaffWhatsNewComponent', () => {
  let component: StaffWhatsNewComponent;
  let fixture: ComponentFixture<StaffWhatsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffWhatsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffWhatsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
