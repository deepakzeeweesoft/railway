import { Component, OnInit } from '@angular/core';
import {TrainService} from '../train.service' //#1 import the service file here becouse we want to genrate the list
@Component({
  selector: 'app-list-of-train',
  templateUrl: './list-of-train.component.html',
  styleUrls: ['./list-of-train.component.css']
})
export class ListOfTrainComponent implements OnInit {

  constructor(private train:TrainService) { } //#2 step
    collection:any=[];//collection={} modify becouse we want to remove data when we click on delete
  ngOnInit(): void {
                
    this.train.getList().subscribe((data)=>{
      //console.warn(data);
      console.log('its a final madification at here');
        this.collection=data;
    })            
  }
  deleteTrain(sac)
  {
    console.warn(sac);
            // remove data when click delete icon
            this.collection.splice(sac-1,1)

            this.train.deleteTrain(sac).subscribe((data)=>{
              console.warn(data);
            })
  }
            
}