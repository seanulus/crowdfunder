import { Pipe, PipeTransform } from '@angular/core';
import { FundingService } from './funding.service';

@Pipe({
  name: 'fundingPipe',
  pure: false
})
export class FundingPipe implements PipeTransform {
  fundings: FirebaseListObservable<any[]>
  transform(input: fundings, desiredFunding) {
    let output: Funding[] = [];
    if(desiredFunding === "1") {
      for(let i = 0; i < input.length; i++) {
        if(parseInt(input[i].raised) < 500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredFunding === "2") {
      for (let i = 0; i < input.length; i++) {
        if(parseInt(input[i].raised) >= 500 && parseInt(input[i].raised) < 1000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredFunding === "3") {
      for (let i = 0; i < input.length; i++) {
        if(parseInt(input[i].raised) >= 1000 && parseInt(input[i].raised) < 1500) {
          output.push(input[i]);
        }
      }
      return output;
    } else if(desiredFunding === "4") {
      for(let i = 0; i < input.length; i++) {
        if(parseInt(input[i].raised) > 1500) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
