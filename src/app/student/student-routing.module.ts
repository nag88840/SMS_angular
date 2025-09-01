import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { AuthGuard } from '../jwt/auth.guard';

// const routes: Routes = [];
const routes: Routes = [
 
  { path: 'dashboard', component: StudentDashboardComponent,canActivate:[AuthGuard]},
  { path: 'profile', component: StudentProfileComponent },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
