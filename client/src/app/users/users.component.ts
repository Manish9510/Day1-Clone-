import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any = [];

  newUser = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient) {
  }

  getUsers() {
    this.http.get('http://localhost:3000/users').subscribe({
      next: (res: any) => {
        console.log(res);

        this.users = res.users;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteUser(id: any) {
    this.http.delete('http://localhost:3000/users/' + id).subscribe({
      next: (res: any) => {
        this.getUsers();
      },
      error: (err: any) => {
      },
    });
  }
}