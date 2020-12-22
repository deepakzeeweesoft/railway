import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.css']
})
export class ModificationComponent implements OnInit {

  constructor() { }

  modiTrain=new FormGroup({
     TrainNo:new FormControl(''),
     TrainName:new FormControl(''),
     passengerName:new FormControl(''),
     status:new FormControl('')
  })

  ngOnInit(): void {
  }

}
