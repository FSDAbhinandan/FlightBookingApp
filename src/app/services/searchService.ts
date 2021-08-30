import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Search } from "../models/search";

@Injectable({
    providedIn: 'root'
  })
export class SearchService{

    url:string="http://localhost:9092/search";

    constructor(private http:HttpClient){}

    onSearch(search:Search){
       return this.http.post(this.url,search);
    }

    
    getFlightById(airlineId:number){
      return this.http.get("http://localhost:9092/flightById/"+airlineId);
  }
}