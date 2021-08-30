import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TicketComponent } from '../ticket/ticket.component';

@Component({
  selector: 'app-ticketbooking',
  templateUrl: './ticketbooking.component.html',
  styleUrls: ['./ticketbooking.component.scss']
})
export class TicketbookingComponent implements OnInit {

  seats:number=0;
  loginUser:any;
  paymentFormFlag:boolean=false;
  downloadableTicket:boolean=false;
  paymentGroup:FormGroup;
  user:any;

  constructor(private dialog:MatDialog, private router:Router) { 

    this.loginUser =JSON.parse(localStorage.getItem("login") || '');
    this.user = JSON.parse(localStorage.getItem('user') || '');

    this.paymentGroup=new FormGroup({
      email:new FormControl("",[]),
      contact:new FormControl("",[]),
      seats:new FormControl("",[])
    });

    
  }

  ngOnInit(): void {

  }

  onBook(){
    this.paymentFormFlag=true;
  }

  ticket={
    email:'',
    contact:'',
    seats:''
  }
  userIdDetails={
    userId:'',
    username:''
  }
  onPayment(){
    this.downloadableTicket=true;
    console.log(this.ticket);
    console.log("Form Group");
    console.log(this.paymentGroup.value);
    localStorage.setItem('ticketDetails', JSON.stringify(this.paymentGroup.value));
    // this.router.navigate(['user-dashboard/ticket']);
   this.userIdDetails.userId=this.user.id;
   this.userIdDetails.username=this.user.username;
   localStorage.setItem('userIdDetails',JSON.stringify(this.userIdDetails));
  }


  openDialog() {
    const dialogRef = this.dialog.open(TicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
