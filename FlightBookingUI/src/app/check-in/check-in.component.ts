import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckInService } from './check-in.service';
import { CheckinData } from './checkin';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  checkinform: any;
  // pnrNo: any;

  
  errorMessage: any;
  message: any;
  error:any;
  success:any;
  //  details:any
  checkinDetail:any;
  successMessage:string = "";
  pnrNo:number = 0;

  constructor(private route:ActivatedRoute,private snackBar:MatSnackBar,private router:Router,private checkinService:CheckInService,private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(param=>{
      this.pnrNo = param['pnrNo'];
     
    })

    document.getElementsByTagName('div')[0].focus();
    
    this.checkinform = this.fb.group({
      
      pnrNo:['',[Validators.required]],
      
      })

    }
    


    

  
   
    openSnackBar(message:any,action:string){
      this.snackBar.open(message,action,{
        duration:10000,
        verticalPosition:'top',
        panelClass:['snackBar-position'],
        horizontalPosition:"center"
      })
    }
    getcheckin(){
      this.successMessage = this.errorMessage="";
      let formObj = this.pnrNo
      this.checkinService.checkinData(formObj).subscribe(
        (response)=>{this.successMessage=response.message;
        this.openSnackBar("Check in Successful!",'ok')
        this.router.navigate(['/home'])
      
      },
        
        (err:any)=>this.errorMessage=err.error.message
      )
    }
}
  

