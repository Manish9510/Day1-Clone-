import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddEmployeeComponent {

  newEmployee = {
    firstName: '',
    lastName: '',
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  createEmployee() {
    this.http.post('http://localhost:3000/employees', this.newEmployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newEmployee.firstName = '';
        this.newEmployee.lastName = '';
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  goToViewEmployees() {
    this.router.navigate(['/employees']);
  }

}