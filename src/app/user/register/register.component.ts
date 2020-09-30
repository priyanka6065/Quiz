import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public user: User = <any>{}; 

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  onCreate() {
    this.service.createUser(this.user).subscribe(data => {
    })
    this.user = {
      FirstName: '',
      LastName: '',
      Email: '',
      PassWord: '',
      UserName: '',
      UserId: 0,
      Roll: ''
    };
  }

}
