import { Component, OnInit } from '@angular/core';
import { TicketHistory } from 'src/app/models/tickethistorydata';
import { Tickets } from '../../../../../../models/tickets';
import { TicketService } from 'src/app/services/ticketservice';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-tickethistory',
  templateUrl: './tickethistory.component.html',
  styleUrls: ['./tickethistory.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TickethistoryComponent implements OnInit {

  user:any;
  id:number=0;
  ticketHistory:any[]=[];
  tick:any
  constructor(private ticketService:TicketService) {
    this.getHistory();
    console.log("Ticket Services"+this.ticketHistory);
   }
  ngOnInit(): void {
    
  }
  tickHis={
    airlineId:'',
    airlineName:'',
arrivalTime:'',
  block:'',
  bookedTicketId:'',
    contact:'',
departureTime:'',
    email:'',
fromLocation:'',
pnr:'',
    seats:'',
    ticketCost:'',
toLocation:'',
    totalSeats:'',
   userId:'',
username:''
  }

  getHistory(){
   this.user= JSON.parse(localStorage.getItem('user') || '')
   this.id= this.user.id;
   this.ticketService.getHistory(this.id).subscribe(
     (data:any)=>{
       console.log(data);
       this.ticketHistory=data;
     },
     (error)=>{
       console.log(error);
     }
   )
   console.log("Subscribe");

   console.log(this.ticketHistory);

  }
}
