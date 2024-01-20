import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any = [];

  

  constructor(
    private http: HttpClient,
    private router: Router
    ) {}

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


  deleteUser(id: any) {
    this.http.delete('http://localhost:3000/users/' + id).subscribe({
      next: (res: any) => {
        this.getUsers();
      },
      error: (err: any) => {
      },
    });
  }

  goToAddUser() {
    this.router.navigate(['/createUsers']);
  }

  // UpdateUser() {
  //   this.http.post('http://localhost:3000/users').subscribe({})
  // }
}