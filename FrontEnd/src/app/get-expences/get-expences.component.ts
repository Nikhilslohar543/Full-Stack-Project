import { Component } from '@angular/core';
import { ExpencesService } from '../expences.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-expences',
  templateUrl: './get-expences.component.html',
  styleUrls: ['./get-expences.component.css']
})
export class GetExpencesComponent {

  tempdata:any[]=[];
  newid:any;

  constructor(private service: ExpencesService, private router: Router){}

  ngOnInit(): void {
    this.loadExpences();
  }

  loadExpences(){
    const userId = sessionStorage.getItem('userId');
    if(userId){
      this.service.getExpenses(userId).subscribe((data)=>{
        this.tempdata = data;
        console.log(this.tempdata)
      })
    }
  }

  onClick(id:any){
    this.router.navigate(['/dashboard/updateExpences',id,this.tempdata]);
  }

  goto(){
    this.router.navigate(['/dashboard'])
  }

}
