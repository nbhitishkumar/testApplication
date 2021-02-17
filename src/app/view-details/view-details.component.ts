import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TestDataService } from '../services/test-data.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  userDetails:any =[];
  showLoader: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private common: TestDataService,
  ) { }

  ngOnInit(): void {
    this.getUserDetails(this.route.snapshot.paramMap.get('user_id'));
  }


  getUserDetails(user_id:any){
    this.showLoader= true
    this.common.getUserDetails(user_id).subscribe(
      res => {
        this.showLoader= false
        this.userDetails= res
      },
      err => {
        console.log('ERROR', err.status);
      },
    );


  }


}
