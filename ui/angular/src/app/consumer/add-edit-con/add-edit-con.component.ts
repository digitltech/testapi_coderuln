import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-con',
  templateUrl: './add-edit-con.component.html',
  styleUrls: ['./add-edit-con.component.css']
})
export class AddEditConComponent implements OnInit {

  constructor(private service:SharedService) { }
  @Input() consumer:any;
  Id:string="";
  Name:string="";
  Phone:string="";
  AdresFull:string="";


  ngOnInit(): void {
    this.Id=this.consumer.id;
    this.Name=this.consumer.Name;
    this.Phone=this.consumer.Phone;
    this.AdresFull=this.consumer.AdresFull;
  }

  AddConsumer(){
    var val = {id:this.Id,
              Name:this.Name,
              Phone:this.Phone,
              AdresFull:this.AdresFull}
              this.service.addConsumer(val).subscribe(res=>{
                alert(res.toString());
              });
                
          

  }

  updateConsumer(){
    var val = {id:this.Id,
      Name:this.Name,
      Phone:this.Phone,
      AdresFull:this.AdresFull}
      this.service.updateConsumer(val).subscribe(res=>{
        alert(res.toString());
      });


  }

}
