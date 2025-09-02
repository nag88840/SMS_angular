import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './jwt/auth.guard';

// const routes: Routes = [];
const routes: Routes = [
  { path: 'student', loadChildren: () => import('./student/student.module').then(m => m.StudentModule),canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),canActivate: [AuthGuard] },
  { path: '', component: HomePageComponent },
   { path: 'homePage', component: HomePageComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
