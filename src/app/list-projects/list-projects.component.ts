import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funding } from '../models/funding.model';
import { FundingService } from '../funding.service';
import {  AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.css'],
  providers: [FundingService]
})
export class ListProjectsComponent implements OnInit {
  fundings: FirebaseListObservable<any[]>;
  constructor(private router: Router, private fundingService: FundingService) { }

  filterByFunding: string = "";
  
  ngOnInit() {
    this.fundings = this.fundingService.getFundings();
  }

  goToFundingDetails(funding) {
    this.router.navigate(['fundings', funding.$key]);
  }

  onChange(optionFromMenu) {
    this.filterByFunding = optionFromMenu;
  }
}
