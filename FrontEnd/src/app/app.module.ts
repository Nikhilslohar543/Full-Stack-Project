import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddExpencesComponent } from './add-expences/add-expences.component';
import { UpdateExpncesComponent } from './update-expnces/update-expnces.component';
import { GetExpencesComponent } from './get-expences/get-expences.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteexpenceComponent } from './deleteexpence/deleteexpence.component';

@NgModule({
  declarations: [
    AppComponent,
    AddExpencesComponent,
    UpdateExpncesComponent,
    GetExpencesComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DeleteexpenceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
