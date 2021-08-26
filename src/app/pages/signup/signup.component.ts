import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  user = {
    username:'',
    password:'',
    email:''
  }

formSubmit(){
 if(this.user.username==null || this.user.username==''){
   alert("username is required");
   return;
 }
 if(this.user.email==null || this.user.email==''){
   alert("email is required");
   return;
 }

 //adding user

 this.userService.addUser(this.user).subscribe(
   (data)=>{
     console.log(data);
     alert(data);
     
   },
   (error)=>{   
     console.log(error);
    
     alert("something went wrong");
     console.log(error.message.value);
     console.log(error.dt);
     console.log(error.status);
   }
 )

 console.log(this.user);
}

}
