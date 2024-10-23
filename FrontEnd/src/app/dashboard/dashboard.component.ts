import { Component } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private service: ExpencesService, private router: Router) { }

  first_name : string | null ='';
  userId : any | null='';

  ngOnInit(){
    this.first_name = sessionStorage.getItem('first_name')
    console.log(this.first_name)
  }

  expences() {
    this.userId = sessionStorage.getItem('userId');
    console.log(this.userId)
    this.router.navigate(['/dashboard/getExpences', this.userId])

  }

  addexpences(){
    this.router.navigate(['/dashboard/addExpences',this.userId])
  }

  goto() {
    if(window.confirm("Are you sure want to log out?")){
      this.router.navigate(['/home/signin'])
    }
  }

}
