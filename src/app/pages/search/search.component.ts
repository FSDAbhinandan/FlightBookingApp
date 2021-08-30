import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightList } from 'src/app/models/flightlist';
import { AdminService } from 'src/app/services/admin.service';
import { SearchService } from 'src/app/services/searchService';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  searchGroup:FormGroup
  searchForm:boolean=true;
  flights:FlightList[]=[];
  page:number=1;

  constructor(private searchService:SearchService, private router:Router) { 
    this.searchGroup=new FormGroup({
      fromLocation: new FormControl("",[]),
      toLocation: new FormControl("",[])
    })
  }

  ngOnInit(): void {
  }

  onSearch(){
    console.log(this.searchGroup);
    console.log(this.searchGroup.value);
    this.searchService.onSearch(this.searchGroup.value).subscribe(
      (data:any)=>{
        console.log(data);
        this.flights=data;
        this.searchForm=false;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  searchAgain(){

    this.searchForm=true;
  }

  goForTicket(airlineId:number){
    console.log("goForTicket "+airlineId);
    this.searchService.getFlightById(airlineId).subscribe(
      (data:any)=>{
        console.log(data);
        localStorage.setItem("login",JSON.stringify(data));
      },
      (error)=>{
        console.log(error);
      }
    )

    this.router.navigate(['login']);
  }

}
