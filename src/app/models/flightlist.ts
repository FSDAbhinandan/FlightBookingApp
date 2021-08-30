export class FlightList{
    constructor(
       public airlineId:number=0,
       public airlineName:string,
       public fromLocation:string,
       public toLocation:string,
       public departureTime:string,
       public arrivalTime:string,
       public totalSeats:number,
       public ticketCost:number,
       public block:boolean=false
    ){}
}