import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { FundingService } from '../funding.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Funding } from '../models/funding.model';

@Component({
  selector: 'app-funding-detail',
  templateUrl: './funding-detail.component.html',
  styleUrls: ['./funding-detail.component.css'],
  providers: [FundingService]
})
export class FundingDetailComponent implements OnInit {
  fundingId: string;
  fundingToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private fundingService: FundingService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.fundingId = urlParameters['id'];
    });
    this.fundingToDisplay = this.fundingService. getFundingById(this.fundingId);
  }

  fundProject() {
    this.fundingService.updateFunding(this.fundingId, 20);
  }

  fundSpecificAmount(fundAmount) {
    this.fundingService.updateFunding(this.fundingId, parseInt(fundAmount));
  }

}
