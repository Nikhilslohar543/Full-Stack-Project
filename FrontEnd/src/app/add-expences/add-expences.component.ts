import { Component } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expences',
  templateUrl: './add-expences.component.html',
  styleUrls: ['./add-expences.component.css']
})
export class AddExpencesComponent {

  constructor(private service: ExpencesService, private router: Router) { }

  expences = {
    expName: '',
    amount: '',
    date: '',
    description: ''
  }

  userId: any | null = '';

  onSubmit() {
    this.userId = sessionStorage.getItem('userId');
    if (window.confirm('Confirm Expences Details!')) {
      this.service.addExpences(this.userId, this.expences).subscribe({
        next: (data) => {
          alert(data);
          console.log(this.expences);
          this.goto(); 
        },
        error: (error) => {
          alert(error.error);
        }
      });
    }
  }
  

  goto() {
    this.router.navigate(['/dashboard/getExpences',this.userId])
  }

}
