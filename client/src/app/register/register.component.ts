import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  newUser = {
    email: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register() {
    this.http.post('http://localhost:3000/users/register', this.newUser).subscribe({
      next: (res: any) => {
        this.router.navigate(['login']);
      },
      error: (error: any) => {

      }
    })
  }
}