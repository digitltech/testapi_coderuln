import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  readonly APIURL="http://localhost:5042/api";


  constructor(private http:HttpClient) { }
  
  getConList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'/consumer');

  }

  addConsumer(val:any){
    return this.http.post(this.APIURL+'/consumer',val)
  }

  updateConsumer(val:any){
    return this.http.put(this.APIURL+'/Consumer',val)
  }

  deleteConsumer(val:any){
    return this.http.delete(this.APIURL+'/Consumer/'+val)
  }

  getConinfoList():Observable<any[]>{
    return this.http.get<any>(this.APIURL+'consinformation');//список потребителей со счетчиками

  }

  
}
