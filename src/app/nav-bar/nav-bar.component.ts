import { Component, OnInit } from '@angular/core';
import { Console } from 'console';
 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }
 isSidenavOpen:boolean=false;
  ngOnInit(): void {
  }
    isLoggedIn() {
      return !!localStorage.getItem('token');
    }

    logout(){
      console.log("User logged out");
      console.log(localStorage.getItem('token'));
      localStorage.removeItem('token');
      console.log(localStorage.getItem('token'));
    }
}
