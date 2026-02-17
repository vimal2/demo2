import { Component } from '@angular/core';
import User from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

}
