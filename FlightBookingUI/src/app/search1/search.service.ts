import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Search } from './search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

//   constructor() { }
// }



 url ="http://localhost:8084/user/"
 constructor(private http:HttpClient) { }

    search(pnrNo:any):Observable<any>{
    return this.http.get<any>(this.url + pnrNo)
  }

}

  
