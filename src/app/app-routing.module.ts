import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//my self for component added
import {AddTrainComponent} from './add-train/add-train.component'
import {ListOfTrainComponent} from './list-of-train/list-of-train.component'
import {LoginTrainComponent} from './login-train/login-train.component'
import {NewUserComponent} from './new-user/new-user.component'
import {ModificationComponent} from './modification/modification.component'

const routes: Routes = [
  {
    path:'add',
    component:AddTrainComponent
  },

  {
    path:'list',
    component:ListOfTrainComponent
  },


  {
    path:'login',
    component:LoginTrainComponent
  },

      
  {
    path:'new',
    component:NewUserComponent
  },
    
  {
    path:'modi/:id',
    component:ModificationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
