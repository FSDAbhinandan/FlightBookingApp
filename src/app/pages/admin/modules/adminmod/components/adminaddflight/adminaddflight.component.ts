import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminaddflight',
  templateUrl: './adminaddflight.component.html',
  styleUrls: ['./adminaddflight.component.scss']
})
export class AdminaddflightComponent implements OnInit {

  addFlightGroup:FormGroup;

  constructor(private adminService: AdminService, private snack:MatSnackBar) {

    this.addFlightGroup=new FormGroup({
      airlineName: new FormControl("",[
        Validators.required
      ]),
      fromLocation: new FormControl("",[
        Validators.required
      ]),
      toLocation: new FormControl("",[
        Validators.required
      ]),
      arrivalTime: new FormControl("",[
        Validators.required
      ]),
      departureTime: new FormControl("",[
        Validators.required
      ]),
      totalSeats: new FormControl("",[
        Validators.required
      ]),
      ticketCost: new FormControl("",[
        Validators.required
      ])
    });
   }

  ngOnInit(): void {
  }

    viewFlightData={
    airlineId:'',
    airlineName:'',
    fromLocation:'',
    toLocation:'',
    departureTime:'',
    arrivalTime:'',
    totalSeats:'',
    ticketCost:''
  }

  saveFlight(){
    this.adminService.saveFlight(this.addFlightGroup.value).subscribe(
      (data)=>{
        console.log(data);
        this.snack.open("Flight Added Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      },
      (error)=>{
        console.log(error);
        this.snack.open("Something Went Wrong", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      }
    )  
   this.addFlightGroup.reset();
  }

}
