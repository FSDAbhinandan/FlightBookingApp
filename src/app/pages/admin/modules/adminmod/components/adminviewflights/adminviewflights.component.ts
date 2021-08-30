import { Component, OnInit } from '@angular/core';
import { FlightList } from 'src/app/models/flightlist';
import { AdminService } from 'src/app/services/admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AdmineditdialogComponent } from '../admineditdialog/admineditdialog.component';

@Component({
  selector: 'app-adminviewflights',
  templateUrl: './adminviewflights.component.html',
  styleUrls: ['./adminviewflights.component.scss']
})
export class AdminviewflightsComponent implements OnInit {

   block:boolean=false;

  constructor(private adminService:AdminService,
             private snack: MatSnackBar,
             private dialog:MatDialog
            ) { }

  ngOnInit(): void {

    this.getAllFlights();
  }

  page:number=1;
  flights:FlightList[]=[];

  // viewFlightData={
  //   airlineId:'',
  //   airlineName:'',
  //   fromLocation:'',
  //   toLocation:'',
  //   departureTime:'',
  //   arrivalTime:'',
  //   totalSeats:'',
  //   ticketCost:''
  // }

  //Fetching All Flights From Database For Admin Component
  getAllFlights(){
    this.adminService.getAllFlight().subscribe(
      (data:any)=>{
        console.log(data);
        this.flights=data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //Deleting Flight By Id 
  deleteById(airlineId:number){
    this.adminService.deleteFlight(airlineId).subscribe(
      (data)=>{
        console.log(data);
        this.getAllFlights();
        this.snack.open("Flight Deleted Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      }
    );
  }

  //Blocking the Flight

  blockFlights(airlineId:number){
    this.adminService.blockFlights(airlineId).subscribe(
      (data)=>{
        console.log(data);
        this.getAllFlights();
        this.snack.open("Flight Blocked Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  //UnBlocking Flight
  unBlockFlights(airlineId:number){
    this.adminService.unBlockFlights(airlineId).subscribe(
      (data)=>{
        console.log(data);
        this.getAllFlights();
        this.snack.open("Flight has been UnBlocked Successfully", "OK", {
          duration: 3000,
          // panelClass: ['green-snackbar', 'login-snackbar'],
         });
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  openDialog() {
    const dialogRef = this.dialog.open(AdmineditdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


