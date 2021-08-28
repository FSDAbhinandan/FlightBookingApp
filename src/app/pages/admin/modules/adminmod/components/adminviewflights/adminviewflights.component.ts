import { Component, OnInit } from '@angular/core';
import { FlightList } from 'src/app/models/flightlist';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-adminviewflights',
  templateUrl: './adminviewflights.component.html',
  styleUrls: ['./adminviewflights.component.scss']
})
export class AdminviewflightsComponent implements OnInit {

  constructor(private adminService:AdminService) { }

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

}
