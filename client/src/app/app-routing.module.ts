import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { authGuard }from  './auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: "full" },
    { path: 'employees', component: EmployeesComponent, canActivate: [authGuard] },
    { path: 'add-employee', component: AddEmployeeComponent },
    { path: 'edit-employee/:id', component: EditEmployeeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }