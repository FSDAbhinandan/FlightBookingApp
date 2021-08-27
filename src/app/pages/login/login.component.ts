import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

loginData={
  username:'',
  password:''
}

  constructor(private snack:MatSnackBar,
     private login:LoginService,
     private router:Router
     ) { }

  ngOnInit(): void {
  }
  formSubmit(){

    if(this.loginData.username.trim()=='' || this.loginData.username==null){
      this.snack.open('Username Is Required','',{
        duration:3000
      });
      return;
    }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
      this.snack.open('password Is Required','',{
        duration:3000
      });
      return;
    }

    //sending request to server to generate token

    this.login.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log(data);
        //saving token in local storage
        this.login.loginUser(data.token);
        //getting details of currently logged in user
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            //setting user details in local storsge
            this.login.setUser(user);
            console.log(user);
            //redirecting according to role

            if(this.login.getUserRole()=='ADMIN'){
              //redirect to admin dashboard
              this.router.navigate(['admin']);
              this.login.loginStatusSubject.next(true);
            }else if(this.login.getUserRole()=='NORMAL'){
              //redirect to user dashboard
              this.router.navigate(['user-dashboard']);
              this.login.loginStatusSubject.next(true);
            }else{
              this.login.logOut();
              location.reload();
            }
          }
        );
      },
      (error)=>{
        console.log(error);
        this.snack.open("Invalid Details , Try again"," ",{duration:3000});
      }
    )
  }

}
