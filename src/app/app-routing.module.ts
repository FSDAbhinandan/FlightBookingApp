import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdmindashboardComponent } from "./pages/admin/admindashboard/admindashboard.component";
import { AdminmodModule } from "./pages/admin/modules/adminmod/adminmod.module";
import { AdminaddflightComponent } from "./pages/admin/modules/adminmod/components/adminaddflight/adminaddflight.component";
import { AdminmanagecouponComponent } from "./pages/admin/modules/adminmod/components/adminmanagecoupon/adminmanagecoupon.component";
import { AdminviewflightsComponent } from "./pages/admin/modules/adminmod/components/adminviewflights/adminviewflights.component";

import { LoginComponent } from "./pages/login/login.component";
import { SearchComponent } from "./pages/search/search.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { TicketComponent } from "./pages/user/modules/usermod/components/ticket/ticket.component";
import { TicketbookingComponent } from "./pages/user/modules/usermod/components/ticketbooking/ticketbooking.component";
import { TickethistoryComponent } from "./pages/user/modules/usermod/components/tickethistory/tickethistory.component";
import { UsersearchComponent } from "./pages/user/modules/usermod/components/usersearch/usersearch.component";
import { UserdashboardComponent } from "./pages/user/userdashboard/userdashboard.component";
import { AdminGuard } from "./services/admin.guard";
import { NormalGuard } from "./services/normal.guard";

const routes: Routes = [
    {path:'signup', component:SignupComponent},
    {path:'login',component:LoginComponent},
    {path:'',component:SearchComponent},
    // {path:'**',component:LoginComponent},
    {path:'admin',component:AdmindashboardComponent,canActivate:[AdminGuard], children:[
        {path:'viewflights',component:AdminviewflightsComponent},
        {path:'addflight',component:AdminaddflightComponent},
        {path:'managecoupon', component: AdminmanagecouponComponent}
    ]},
    {path:'user-dashboard', component:UserdashboardComponent, canActivate:[NormalGuard],children:[
        {path:'tickethistory', component:TickethistoryComponent},
        {path:'',component:TicketbookingComponent},
        {path:'usersearch',component:UsersearchComponent},
        {path:'ticket',component:TicketComponent}
    ]},
    //  {path:'admin',loadChildren: ()=>import("../app/pages/admin/modules/adminmod/adminmod.module").then(m=>m.AdminmodModule)}
];

@NgModule({
   imports: [RouterModule.forRoot(routes), 
    AdminmodModule
],
   exports:[RouterModule]
})
export class AppRoutingModule{}