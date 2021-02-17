import { ViewDetailsComponent } from './view-details/view-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';


const APP_ROUTES: Routes = [
  { path: '', component: TestComponent },
  { path: 'user-id/:user_id', component: ViewDetailsComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
