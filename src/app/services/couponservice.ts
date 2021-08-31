import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })
export class CouponService{

    constructor(private http:HttpClient){}

    url:string="http://localhost:9091/admin/";


    public addCoupon(couponData:any){
       return this.http.post(this.url+"addcoupon",couponData);
    }

    public getAllCoupon(){
        return this.http.get(this.url+"getcoupons")
    }

    //deleting coupon by id

    public deleteCoupon(id:number){
        return this.http.delete(this.url+"delete/"+id);
    }
}