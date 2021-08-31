import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CouponService } from 'src/app/services/couponservice';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminmanagecoupon',
  templateUrl: './adminmanagecoupon.component.html',
  styleUrls: ['./adminmanagecoupon.component.scss'],

})
export class AdminmanagecouponComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  getCoupon:any[]=[];

  constructor(private _formBuilder: FormBuilder, private couponService:CouponService,  private snack:MatSnackBar) {

    

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });


   }

  ngOnInit(): void {
    this.getAllCoupon();
  }

couponData={
  couponName:'',
  couponValue:''
};
  onAdd(){
  
    // this.couponData = Object.assign(this.firstFormGroup);
    this.couponData.couponName=this.firstFormGroup.value.firstCtrl;
    this.couponData.couponValue=this.secondFormGroup.value.secondCtrl;

    console.log(this.firstFormGroup.value.firstCtrl);
    console.log(this.secondFormGroup.value);
    console.log("Kuch Object");
    console.log(this.couponData);
    this.couponService.addCoupon(this.couponData).subscribe(
      (data)=>{
        console.log(data);
        this.getAllCoupon();
        this.snack.open("Coupon Added Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      },
      (error)=>{
        console.log(error);
      }
    );

  }

  getAllCoupon(){
    this.couponService.getAllCoupon().subscribe(
      (data:any)=>{
        console.log(data);
        this.getCoupon=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  deleteCoupon(id:number){
    this.couponService.deleteCoupon(id).subscribe(
      (data)=>{
        console.log(data);
        this.getAllCoupon();
        this.snack.open("Coupon Deleted Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
