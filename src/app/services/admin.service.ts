import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FlightList } from "../models/flightlist";


@Injectable({
    providedIn: 'root'
  })
export class AdminService{

url:string="http://localhost:9091/admin/flights";

    constructor(private http:HttpClient){}

    getAllFlight(){
        return this.http.get(this.url);
    }

    saveFlight(flight:any){
        return this.http.post(this.url,flight);
    }
    //Delete Flight By Id
    deleteFlight(airlineId:number){
        return this.http.delete(this.url+"/"+airlineId);
    }

    //Block Flights

    blockFlights(airlineId:number){
        return this.http.put(this.url+"/"+airlineId, airlineId);
    }
}