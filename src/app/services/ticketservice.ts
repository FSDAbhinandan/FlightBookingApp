import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TicketHistory } from "../models/tickethistorydata";

@Injectable({
    providedIn: 'root'
  })
  export class TicketService{
      url:string="http://localhost:9092/bookedticket";
      constructor(private http:HttpClient){}
      
      public saveTicketHistory(ticketHistoryData: TicketHistory){
          return this.http.post(this.url,ticketHistoryData);
      }

      public getHistory(id:number){
          return this.http.get("http://localhost:9092/tickethistory/"+id);
      }
  }