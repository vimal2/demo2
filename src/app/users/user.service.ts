import { Injectable } from '@angular/core';
import User from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890"},
    {id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321"},
    {id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-123-4567"}
  ]

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
