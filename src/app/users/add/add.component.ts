import { Component } from '@angular/core';
import { UserService } from '../user.service';
import User from '../user.model';

@Component({
  selector: 'app-user-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class UserAddComponent {
  user: User = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private userService: UserService) { }

  onSubmit() {
    console.log(this.user);
    
    // this.userService.addUser(this.user);
    this.userService.addUser(this.user).subscribe(users => {
      console.log(users);

      this.user = {
        name: '',
        email: '',
        phone: ''
      }; 
    });
    
  }

}
