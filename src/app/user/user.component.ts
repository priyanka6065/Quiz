import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { Form } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  public user: User = <any>{};

  constructor(private service: UserService) { }

  getUsers() {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log("error");
    })
  }

  onDelete(id: number) {
    if (confirm("Are you sure to delete " + name)) {
    this.service.deleteUser(id).subscribe(data => {
      this.getUsers();
    })
  }
  }

  onCreate() {
    this.service.createUser(this.user).subscribe(data => {
      this.getUsers();
    })
    this.user = {
      FirstName: '',
      LastName: '',
      Email: '',
      PassWord: '',
      UserName: '',
      UserId: 0
    };
  }

  onUpdate(id: number) {
    this.service.updateUser(id, this.user).subscribe(data => {
      console.log('updated data');
      this.getUsers();
    })
  }

  onEdit(id: number) {
    this.service.getUserById(id).subscribe(data => {
      this.user = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

}
