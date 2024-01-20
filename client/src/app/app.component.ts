import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  users: any = [];

  newUser = {
    firstName:'',
    lastName:'',
  }

  // tasks = ['Study', 'Play', 'Sleep'];

  constructor (private http : HttpClient) {

  }

  getUsers(){
    this.http.get("http://localhost:3000/users").subscribe({
      next: (res: any) => {

        console.log(res);

        this.users = res.users;
      },
      error: (err) =>{
        console.log(err);
      }
    })
  }

  deleteUser(id: any){

    this.http.delete('http://localhost:3000/users/'+id).subscribe({
    next:(res: any) =>{
        this.getUsers();
    },
    error:(err) =>{
      console.log(err);
    },
  })
}

  createUser(){
    this.http.post('http://localhost:3000/users',this.newUser).subscribe({
      next: (res: any) =>{
        console.log(res);
      },
      error:(err) =>{
        console.log(err);
      },
    })
  }
}
