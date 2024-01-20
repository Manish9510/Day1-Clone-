import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AddUsersComponent } from "./add-users/add-users.component";

@NgModule({
    declarations: [
        AppComponent,
        UsersComponent,
        AddUsersComponent    
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
    export class AppModule{

    }
