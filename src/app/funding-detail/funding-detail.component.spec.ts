import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingDetailComponent } from './funding-detail.component';

describe('FundingDetailComponent', () => {
  let component: FundingDetailComponent;
  let fixture: ComponentFixture<FundingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
