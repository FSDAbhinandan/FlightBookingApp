import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickethistoryComponent } from './components/tickethistory/tickethistory.component';
import { UsersearchComponent } from './components/usersearch/usersearch.component';
import { TicketbookingComponent } from './components/ticketbooking/ticketbooking.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { TicketComponent } from './components/ticket/ticket.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    TickethistoryComponent,
    UsersearchComponent,
    TicketbookingComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule
  ]
})
export class UsermodModule { }
