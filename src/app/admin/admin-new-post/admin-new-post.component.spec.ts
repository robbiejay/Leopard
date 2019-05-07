import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewPostComponent } from './admin-new-post.component';

describe('AdminNewPostComponent', () => {
  let component: AdminNewPostComponent;
  let fixture: ComponentFixture<AdminNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
