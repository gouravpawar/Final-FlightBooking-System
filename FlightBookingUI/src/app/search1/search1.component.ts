import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search1',
  templateUrl: './search1.component.html',
  styleUrls: ['./search1.component.css']
})
export class Search1Component implements OnInit {
  [x: string]: any;

  startPoint: any;
  endPoint: any;
  flightDate: any;
  searchForm:any;
  pnrNo:number=0
  message:any


  constructor(private service:SearchService ,private http:HttpClient, private router:Router,private snackBar:MatSnackBar, private fb:FormBuilder) { }
  ngOnInit(): void {

    this['route'].params.subscribe((param: { [x: string]: number; })=>{
      this.pnrNo = param['pnrNo'];
     
    })


    document.getElementsByTagName('div')[0].focus();
 
  this.searchForm = this.fb.group({
    startPoint:['',[Validators.required]],
    endPoint:['',[Validators.required]],
    flightDate:['',[Validators.required]],
    pnrNo:['',[Validators.required]],
   
  })
}
openSnackBar(message:string,action:string){
  this.snackBar.open(message,action,{
    duration:10000,
    verticalPosition:'top',
    panelClass:['snackBar-position'],
    horizontalPosition:"center"
  })
}
searchNow(){
  console.log(this.searchForm.value);
  
  let response = this.service.search(this.searchForm.value);
  response.subscribe((data)=>{
    this.openSnackBar("Search Successful",'ok')
    this.message = data
   console.log(this.message);
   
    console.log(data,"!!!!!!!!!!!!!!");
   
  })
 
 
}
  }

 
   
  


