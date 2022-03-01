import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { ConsInfo } from './cons-information/cons-information';

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
    return this.http.get<any>(this.APIURL+'/Information');//список потребителей со счетчиками

  }

  getConInfo(id:number):Observable<ConsInfo>{
    return this.http.get<ConsInfo>(this.APIURL+'/Information/GetConsInfo'+id);
  }
  addConsInfo(data:any){
    return this.http.post(this.APIURL+'/Information',data);

  }

  updConsInfo(id: number|string,data:any){
    return this.http.put(this.APIURL+'/Information/${id}',data);
  }

  delConsInfo(id:number|string, data:any){
    return this.http.delete(this.APIURL+'/Information/${id}');
  }

  GetElInfoList(idelmetric:number){
    return this.http.get(this.APIURL+'/Information/GetInfo/${idelmetric}');
  }
  GetListMetric(val:any){
    return this.http.get(this.APIURL+'/Information/GetListMetric/'+ val);
  }
  
}
