import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewflightsComponent } from './adminviewflights.component';

describe('AdminviewflightsComponent', () => {
  let component: AdminviewflightsComponent;
  let fixture: ComponentFixture<AdminviewflightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewflightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminviewflightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
