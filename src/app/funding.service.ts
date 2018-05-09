import { Injectable } from '@angular/core';
import { Funding } from './models/funding.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FundingService {
  fundings: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase){
    this.fundings = database.list('fundings');
  }

  getFundings() {
    return this.fundings;
  }

  getFundingById(fundingId: string) {
    return this.database.object('fundings/' + fundingId);
  }

  updateFunding(fundingId, fundAmount) {
    let localProject;
    let projectEntryInFirebase = this.getFundingById(fundingId);
    projectEntryInFirebase.subscribe(dataLastEmittedFromObserver => {
      localProject = dataLastEmittedFromObserver;
    });
    let newRaisedAmount = (+localProject.raised + fundAmount).toString();
    projectEntryInFirebase.update({raised: newRaisedAmount});
  }
}
