import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName;
  userId;
    loginUserData={};
    isLoggedIn=false
  constructor(private _auth:AuthService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  
  loginUser(loginUserData){
    //alert("in login user");
    console.log(loginUserData.userName);
    this._auth.loginUser(this.loginUserData).subscribe(res=>{console.log("res: "+Object.values(res));
                    if(res!=null){
                      this.router.
                    navigate(['/single-media'],
              );}
              sessionStorage.setItem("userName", loginUserData.userName);
              sessionStorage.setItem("userId",Object.values(res)[1]);
              sessionStorage.setItem("isLoggedIn","true")
              console.log("token: "+Object.values(res)[9]);
              sessionStorage.setItem("token",Object.values(res)[9]);
              
  },
    err=>console.log(err));
  // this._auth.loginUser(this.loginUserData).subscribe(
  //   (data: HttpResponse<any>) => {
  //    // console.log("res:"+Object.values(res));
  //      var token = data.headers.get('auth');
  //      console.log("token:"+token);
  //     // sessionStorage.setItem('token', token);
  //     this.router.navigate([
  //       '/single-media',
  //       {
  //         userName: loginUserData.userName,
  //         isLoggedIn: true,
  //         //userId: res.body.userId
  //       }
  //     ]);
  //   },
  //   error => {
  //     this.router.navigate(['login', { userNotFound: true }]).then(() => {
  //       window.location.reload();
  //     });
  //   }
  // );
   }
}
