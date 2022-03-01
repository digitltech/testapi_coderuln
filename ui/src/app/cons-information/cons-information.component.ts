import { Component, OnInit,Input } from '@angular/core';
import { FormArray, FormBuilder,FormGroup,Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cons-information',
  templateUrl: './cons-information.component.html',
  styleUrls: ['./cons-information.component.css']
})
export class ConsInformationComponent implements OnInit {

data:any=[];
ConsInformationList:any=[];
  ConsList:any=[];
  ElMetric = [];

  constructor( private service:SharedService) { }
  // @Input() data:any;
  id: number = 0;
  ElMetersId: number = 0;
  conInfo:any;


  ngOnInit():void {
    // addconsinformationForm
    this.ElMetersId = this.data.ElMetersId;
    this.ConList();
    this.ConsInformation();

  }
ConList(){
  this.service.getConList().subscribe(data=>{
    this.ConsList=data;
  });
}
  ElMetricList(){ 
    var ElMetersId=this.ElMetersId;
    this.service.GetElInfoList(ElMetersId).subscribe(data=>{
      this.ConsList=data
    });
  }
  ConsInformation(){
    this.service.getConinfoList().subscribe(data=>{
      this.ConsInformationList=data;
    });
  }

  edit(item:any){
    this.conInfo = item;

  }

  }


