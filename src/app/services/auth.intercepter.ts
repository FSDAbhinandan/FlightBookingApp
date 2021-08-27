import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable()
export class AuthIntercepter implements HttpInterceptor{
constructor(private login:LoginService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
console.log("inside intercepter");
        let authReq = req;
        let token = this.login.getToken();
        console.log(token);
        if(token!=null){
            authReq = authReq.clone(
                {setHeaders:{
                    Authorization: 'Bearer '+token
                }
            }
            );
        }
       return  next.handle(authReq);
    }

}

export const authInterCeptorProvider =[
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthIntercepter,
        multi:true
    }
]