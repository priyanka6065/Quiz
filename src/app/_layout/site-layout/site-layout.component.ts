import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit {
  public userName: string = '';

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('userToken') == null) {
      this.router.navigate(['/login']);
    }
    console.log(localStorage.getItem('userName'));
    this.userName = localStorage.getItem('userName');
  }

  onLogout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userId');
    localStorage.removeItem('userName');
    this.userName = '';
    this.router.navigate(['/login']);
  }

}
