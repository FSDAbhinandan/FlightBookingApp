import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "./pages/admin/admindashboard/admindashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { UserdashboardComponent } from "./pages/user/userdashboard/userdashboard.component";
import { AdminGuard } from "./services/admin.guard";
import { NormalGuard } from "./services/normal.guard";

const routes: Routes = [
    {path:'signup', component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'admin',component:AdmindashboardComponent,canActivate:[AdminGuard]},
    {path:'user-dashboard', component:UserdashboardComponent, canActivate:[NormalGuard]}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports:[RouterModule]
})
export class AppRoutingModule{}