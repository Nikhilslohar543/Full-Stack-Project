import { Component } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-expnces',
  templateUrl: './update-expnces.component.html',
  styleUrls: ['./update-expnces.component.css']
})
export class UpdateExpncesComponent {

  constructor(private service: ExpencesService, private router: Router, private route: ActivatedRoute) { }

  newid: any;

  expences = {
    id: 0,
    expName: '',
    amount: 0,
    date: '',
    description: ''
  }

  userId: any | null = '';

  goto() {
    this.userId = sessionStorage.getItem('userId')
    this.router.navigate(['/dashboard/getExpences', this.userId])
  }

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.newid = param.get('id');
      console.log(this.newid)
      this.getExpence();
    })
  }

  getExpence() {
    this.service.getExpenceById(this.newid).subscribe((data) => {
      this.expences = data;
      console.log(this.expences);
    })
  }

  onSubmit() {
    this.userId = sessionStorage.getItem('userId')
    if (window.confirm('Confirm updates')) {
      this.service.updateExpences(this.userId, this.expences).subscribe({
        next: (data) => {
          alert(data);
          this.goto(); 
        },
        error: (error) => {
          alert(error.error);
        }
      });
    }
  }

  delete(id: any) {
    this.router.navigate(['/dashboard/deleteexpence',id])
  }

}
