import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrl: './edit-employee.component.scss'
})
export class EditEmployeeComponent implements OnInit {

  employee = {
    firstName: '',
    lastName: ''
  }

  constructor(
    private http: HttpClient,
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployeeById(this.active.snapshot.params['id'])
  }

  getEmployeeById(id: string) {
    this.http.get('http://localhost:3000/employees/' + id).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.employee.firstName = res.firstName;
        this.employee.lastName = res.lastName;
      },
      error: (error: any) => {
        console.log('error', error)
      }
    })
  }

  updateEmployee() {
    this.http.put('http://localhost:3000/employees/' + this.active.snapshot.params['id'], this.employee).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.router.navigate(['/employees'])
      },
      error: (error: any) => {
        console.log('error', error)
      }
    })
  }
}