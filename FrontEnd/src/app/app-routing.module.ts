import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetExpencesComponent } from './get-expences/get-expences.component';
import { AddExpencesComponent } from './add-expences/add-expences.component';
import { UpdateExpncesComponent } from './update-expnces/update-expnces.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteexpenceComponent } from './deleteexpence/deleteexpence.component';

const routes: Routes = [

  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home', children:[
      {
        path:'',component:HomeComponent
      },
      {
        path:'signin',component:LoginComponent
      },
      {
        path:'signup',component:SignupComponent
      }
    ]
  },

  {
    path:'dashboard',children:[
      {
        path:'',component:DashboardComponent
      },
      {
        path:'getExpences/:userId',component:GetExpencesComponent
      },
      {
        path:'addExpences/:userId',component:AddExpencesComponent
      },
      {
        path:'updateExpences/:id',component:UpdateExpncesComponent
      },
      {
        path:'deleteexpence/:id',component:DeleteexpenceComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
