import { Injectable } from '@angular/core';
import User from './user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // state
  users: User[] = [
    {id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-7890"},
    {id: 2, name: "Jane Smith", email: "jane@example.com", phone: "098-765-4321"},
    {id: 3, name: "Bob Johnson", email: "bob@example.com", phone: "555-123-4567"}
  ]

  constructor() { }

  // getUsers(): User[] {
  getUsers(): Observable<User[]> {
    // return this.users;

    // In a real application, this would likely make an HTTP request to a backend API
    return new Observable(subscriber => {
      subscriber.next(this.users);
      subscriber.complete();
    });
  }

  addUser(user: User): Observable<User[]> {
    this.users.push(user);

    return new Observable(subscriber => {
      subscriber.next(this.users);
      subscriber.complete();
    });
  }

  removeUser(id: number): Observable<User[]> {
    return new Observable(subscriber => {
      this.users = this.users.filter(user => user.id !== id);
      subscriber.next(this.users);
      subscriber.complete();
    });

  }
}
