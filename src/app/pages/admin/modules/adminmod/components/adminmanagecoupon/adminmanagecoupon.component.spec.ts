import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmanagecouponComponent } from './adminmanagecoupon.component';

describe('AdminmanagecouponComponent', () => {
  let component: AdminmanagecouponComponent;
  let fixture: ComponentFixture<AdminmanagecouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmanagecouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmanagecouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
