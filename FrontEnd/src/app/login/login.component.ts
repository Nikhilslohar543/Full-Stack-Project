import { Component } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private service: UserserviceService, private router: Router) { }

  username = '';
  password = '';

  onSignin() {

    this.service.login(this.username, this.password).subscribe({      
      next: (data) => {
        console.log(data)
        const userId = data.uId;
        const first_name = data.first_name;
        sessionStorage.setItem('first_name',first_name);
        sessionStorage.setItem('userId',userId);
        console.log(userId)
        alert("Logged in successfully")
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        alert(error.error);
      }
    })

  }

}
