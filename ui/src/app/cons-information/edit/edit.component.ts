import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() coninfo:any;
  ConsumerId:number=0;
  ElmetricList:any=[];

  ngOnInit(): void {
    this.loadElmetricList();
  }
  loadElmetricList(){
  
    var val = {ConsumerId:this.ConsumerId};
    this.service.GetListMetric(val).subscribe((data:any)=>{
      this.ElmetricList=data;
    })
  }

}
