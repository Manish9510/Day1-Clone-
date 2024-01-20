import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users/users.component";
import { AddUsersComponent } from "./add-users/add-users.component";

export const routes: Routes = [
    { path:'',redirectTo:'users',pathMatch:"full" },
    { path: 'users',component:UsersComponent},
    { path: 'createUsers',component: AddUsersComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }