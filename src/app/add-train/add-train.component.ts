import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms' //Reactive Form

import {TrainService} from  '../train.service'// added serevice
@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(private deep:TrainService) { }
  alert:boolean=false//  for alert purpose
  //my self
  addTrain=new FormGroup({
    TrainNo:new FormControl(''),
    TrainName:new FormControl(''),
    passengerName:new FormControl(''), 
    status:new FormControl('')
  }) 
  ngOnInit(): void {

  }
     anyTrain()
  {
    //console.warn(this.addTrain.value)
     this.deep.putList(this.addTrain.value).subscribe((result)=>{
       console.warn(result)
       
       this.alert =true //alert condision is true  
    
      })
        this.addTrain.reset({})
  }
  closeAlert()
        {
          this.alert=false
        }
}
