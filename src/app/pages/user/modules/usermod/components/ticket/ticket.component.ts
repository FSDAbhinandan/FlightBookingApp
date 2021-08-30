import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { TicketService } from 'src/app/services/ticketservice';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  loginUser:any;
  ticketDetails:any
  user:any
  userIdDetails:any;
  constructor(private dialog:MatDialog, private ticketHistoryService:TicketService) {
 
    console.log(this.historyData);
   }



   historyData = Object.assign( JSON.parse(localStorage.getItem('userIdDetails') || ''),
   JSON.parse(localStorage.getItem("login") || ''),
    JSON.parse(localStorage.getItem('ticketDetails') || ''));


  ngOnInit(): void {
    this.loginUser =JSON.parse(localStorage.getItem("login") || '');
    this.ticketDetails = JSON.parse(localStorage.getItem('ticketDetails') || '');
    this.user = JSON.parse(localStorage.getItem('user') || '');
    this.userIdDetails=JSON.parse(localStorage.getItem('userIdDetails') || '');
  }

 
  download(){
    this.ticketHistoryService.saveTicketHistory(this.historyData).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
    var element = <HTMLImageElement>document.getElementById('table');

    html2canvas(element).then((canvas)=>{
      console.log(canvas);
      var imageData = canvas.toDataURL('image/png');
      var doc = new jsPDF();
      var imageHieght = canvas.height*208/canvas.width;
      doc.addImage(imageData,0,0,208,imageHieght);
      doc.save('Ticket.pdf');
    })
  }
}
