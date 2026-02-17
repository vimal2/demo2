import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class UserListComponent {

  users$ = this.userService.getUsers();

  constructor(private userService: UserService) { }

  deleteUser(id: any): void {
    this.userService.removeUser(id);
  }

}
