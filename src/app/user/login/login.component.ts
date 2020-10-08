import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = <any>{};

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.service.login(this.user).subscribe(data => {
      this.user = data as User;

      localStorage.setItem('userToken', this.user.Roll);

      if (this.user.Roll == 'admin') 
        this.router.navigate(['categories']);
      else
        this.router.navigate(['quizsettings']);
    })

  }
}
