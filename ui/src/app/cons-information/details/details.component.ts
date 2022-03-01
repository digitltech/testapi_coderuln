import { InterpolationConfig } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


import { SharedService } from 'src/app/shared.service';
import { ConsInfo } from '../cons-information';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id!:number;
  consinfo!:ConsInfo;


  constructor(
    public sharedService:SharedService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['consinfoid'];
    this.sharedService.getConInfo(this.id).subscribe((data:ConsInfo)=>{
      this.consinfo = data;
    });
  }

}
