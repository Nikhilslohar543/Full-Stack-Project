import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service : UserserviceService, private router : Router){}

  users={
    first_name:'',
    last_name:'',
    username:'',
    password:''
  }

  onSignup(){
    this.service.signup(this.users).subscribe({
      next:(data)=>{
      console.log(this.users);
      alert(data);
      this.router.navigate(['/home/signin'])
      },
      error:(error)=>{
        alert(error.error)
      }
    })
  }

}
