import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
    templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  response:any[] = [];
  constructor(private fb: FormBuilder, private service: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['test@example.com', Validators.required],
      password: ['12345678', Validators.required]
    });
  }

  sendlogin(){
     this.service.getlogincredentials(this.loginForm.value).subscribe({
       next: (response) => {
        localStorage.setItem('token',response.token || response.accessToken);
        //  localStorage.setItem('token',response.token || response.accessToken);
        this.service.getloggeduser().subscribe({
          next: (user) => {
            console.log("USER", user);
          },
          error: (error) => {
            console.error(error);
          }
        });
        //  console.log("RESPONSE",response);
        //  this.response = response.user;
        //  console.log(this)
        //  console.log("TOKEN",response.token || response.accessToken);
         this.router.navigate(['/student/dashboard']);
       },
       error: (error) => {
         console.error(error);
         alert("Invalid username or password");
       }
     });
  }

}
