import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Search1 } from './search1'

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {
// flight:any
  // flightNo:any



  // searchBar : String ="";
  search: Search1[] |any;
  endPoint: any;
  startPoint: any;
  flightDate: any;
  

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let response = this.http.get("http://localhost:9000/admin/all")
    response.subscribe((data)=>{
    this.search = data;
      console.log(data,"&&&&&&&&&&&&");
    
    })
  }
  SearchbyendPoint(){
  
    if(this.endPoint=='')
  
  {
   
    
        this.ngOnInit();
  }
    else{
            this.search=this.search.filter((res: any)=>{
            return res.endPoint.match(this.endPoint) }
   )}
  }
}







