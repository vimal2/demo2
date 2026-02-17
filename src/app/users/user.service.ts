import { Injectable } from '@angular/core';
import User from './user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // state
  private users: User[] = [
    {id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890"},
    {id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321"},
    {id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-123-4567"}
  ]

  private usersSubject = new BehaviorSubject<User[]>(this.users);

  users$ = this.usersSubject.asObservable();

  constructor() { }

  getUsers(): Observable<User[]> {
    return this.users$;
  }

  addUser(user: User): void {
    this.users.push(user);
    this.usersSubject.next(this.users);
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.usersSubject.next(this.users);
  }
}
