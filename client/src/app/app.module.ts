import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./employees/employees.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
    declarations: [
        AppComponent,
        EmployeesComponent,
        AddEmployeeComponent,
        RegisterComponent,
        LoginComponent,
        EditEmployeeComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}