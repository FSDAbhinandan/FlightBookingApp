import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdialogComponent } from './admineditdialog.component';

describe('AdmineditdialogComponent', () => {
  let component: AdmineditdialogComponent;
  let fixture: ComponentFixture<AdmineditdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmineditdialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmineditdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
