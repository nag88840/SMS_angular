import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddNewComponent } from './add-new/add-new.component';
const routes: Routes = [
  {path:'admin-dashboard', component: AdminDashboardComponent},
  {path:'add-new', component: AddNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
