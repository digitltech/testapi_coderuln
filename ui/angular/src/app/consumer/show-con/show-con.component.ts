import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-con',
  templateUrl: './show-con.component.html',
  styleUrls: ['./show-con.component.css']
})
export class ShowConComponent implements OnInit {

  constructor(private service:SharedService) { }

  ConsumerList:any=[];
 
  ModalTitle:string="dsdsd";
  ActivateAddEditConsumerComp:boolean=false;

  
  consumer:any;
  ngOnInit(): void {
    this.refreshConList();
  }


  addClick(){
 this.consumer={
  Name:"",
  Phone:"",
  AdresFull:""
  }
  this.ModalTitle="Добавить";
  this.ActivateAddEditConsumerComp=true;
  }

  editClick(item: any){
 this.consumer=item;
 this.ModalTitle  = "Редактирование ";
 this.ActivateAddEditConsumerComp=true; 
  }
  closeClick(){

    this.ActivateAddEditConsumerComp=false;
    this.refreshConList();
  }
  refreshConList(){
    this.service.getConList().subscribe(data=>{
      this.ConsumerList=data;
    });
  }

}
