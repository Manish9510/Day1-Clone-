import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router  } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrl: './add-users.component.scss'
})
export class AddUsersComponent {
  newUser = {
    firstName: '',
    lastName: '',
  }

  
  constructor(
    private http: HttpClient,
    private router:Router
    ) {}

  
  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        // this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  goToViewUsers(){
    this.router.navigate(['/users']);
  }
}
