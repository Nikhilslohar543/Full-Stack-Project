import { Component } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deleteexpence',
  templateUrl: './deleteexpence.component.html',
  styleUrls: ['./deleteexpence.component.css']
})
export class DeleteexpenceComponent {

  constructor(private service : ExpencesService, private router : Router, private route : ActivatedRoute){}

  newid:any

  ngOnInit(){
    
    this.route.paramMap.subscribe((param)=>{
      this.newid = param.get("id")

      if (window.confirm('Are you sure you want to delete this Expences?')) {

        this.service.deleteExpences(this.newid).subscribe({
          next: (data) => {
            console.log(data)
            alert(data);
          },
          error: (error) => {
            alert(error.error);
          }
        });
      }
    })

  }

  goto(){
    const userId = sessionStorage.getItem('userId')
    this.router.navigate(['/dashboard/getExpences',userId])
  }

}