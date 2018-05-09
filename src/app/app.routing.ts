import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProjectsComponent } from './list-projects/list-projects.component';
import { FundingDetailComponent } from './funding-detail/funding-detail.component';

const appRoutes: Routes = [
  {
	   path: 'list-projects',
	   component: ListProjectsComponent
	},
  {
    path: 'fundings/:id',
    component: FundingDetailComponent
  }


];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
