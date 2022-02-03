import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CancleBookingService {

  checkinUrl = "http://localhost:8086/checkIn/cancel/"

  constructor(private http: HttpClient) { }

  cancleBooking(pnrNo:any):Observable<any>{
    return this.http.delete(this.checkinUrl + pnrNo,{responseType: 'text'})
  }
}
