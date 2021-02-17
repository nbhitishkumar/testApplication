import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { TestDataService } from '../services/test-data.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { __values } from 'tslib';


export interface PeriodicElement {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface HTMLInputEvent extends Event {
    target: HTMLInputElement & EventTarget;
}




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'userId', 'title', 'completed','action'];
  public dataSource = new MatTableDataSource<PeriodicElement>();
  showLoader: boolean= false;
  userLogin: FormGroup;
  value:string='';
  search = new FormControl('');

  @ViewChild(MatSort) sort:any = MatSort;

  constructor(
    fb: FormBuilder,
    private common: TestDataService,
    private router: Router,
  ) {
    this.userLogin = fb.group({
      search: this.search
    });
   }

  ngOnInit(): void {
    this.getUserProfile();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public doFilter = () => {
    this.value= this.userLogin.value.search
    this.dataSource.filter = this.value.trim().toLocaleLowerCase();
  }

  getUserProfile(){
    this.showLoader= true
    this.common.getConfig().subscribe(
      res => {
        this.showLoader= false
        this.dataSource.data = res as PeriodicElement[];
      },
      err => {
        console.log('ERROR', err.status);
      },
    );
  }

  viewDetails(user_id:any){
    this.router.navigate(["user-id/", user_id]);
  }

}
