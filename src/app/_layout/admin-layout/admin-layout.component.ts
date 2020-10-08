import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  public userToken: string;

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    this.userToken = localStorage.getItem('userToken');

    if (localStorage.getItem('userToken') == null) {
      if (this.userToken != 'admin')
        this.router.navigate(['/login']);
    }
  }

  onLogout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  // Logout() {
  //   localStorage.removeItem('userToken');
  //   this.router.navigate(['/login']);
  // }

  // localStorage.setItem('userToken',data.access_token);
  //     this.router.navigate(['/home']);
}
