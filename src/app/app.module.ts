import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { HttpClientModule } from '@angular/common/http'; 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTrainComponent } from './add-train/add-train.component';
import { ListOfTrainComponent } from './list-of-train/list-of-train.component';
import { LoginTrainComponent } from './login-train/login-train.component';
import { NewUserComponent } from './new-user/new-user.component';
 
import{HttpClientModule} from '@angular/common/http' // import by my self becouse import url
import{ReactiveFormsModule} from '@angular/forms';
import { ModificationComponent } from './modification/modification.component' // adding perpose we are adding reactive form


@NgModule({
  declarations: [
    AppComponent,
    AddTrainComponent,
    ListOfTrainComponent,
    LoginTrainComponent,
    NewUserComponent,
    ModificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   HttpClientModule,
   ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
