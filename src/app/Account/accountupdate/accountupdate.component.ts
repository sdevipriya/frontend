import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-accountupdate',
  templateUrl: './accountupdate.component.html',
  styleUrls: ['./accountupdate.component.css']
})
export class AccountupdateComponent implements OnInit {

  // registerUserData={};
   // registerForm: FormGroup = new FormGroup({});
   registerForm: FormGroup;
 
 
   constructor(private _auth:AuthService,public formBuilder: FormBuilder) {
     this.registerForm = this.formBuilder.group({
       userName: new FormControl('', Validators.compose([
         Validators.required
       ])),
       password: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(30)
       ])),
       confirm: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(30)
       ])),
       userId: new FormControl('', Validators.compose([
         Validators.required,
         Validators.minLength(6),
         Validators.maxLength(30)
       ])),
 
    }, { 
     validators: this.password.bind(this)
   });
     
   }
   
   
 
   ngOnInit() {
   }
 
   error_messages = {
     'userName': [
       { type: 'required', message: 'First Name is required.' },
     ],
      'password': [
        { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
      'confirm': [
         { type: 'required', message: 'password is required.' },
        { type: 'minlength', message: 'password length.' },
        { type: 'maxlength', message: 'password length.' }
      ],
      'userId':[
       { type: 'required', message: 'userId is required.' },
       { type: 'minlength', message: 'userId length.' },
       { type: 'maxlength', message: 'userId length.' }
      ]
   }
   // registerUser(){
   //  console.log(this.registerUserData); 
   //   this._auth.registerUser(this.registerUserData).subscribe(res=>console.log(res),err=>console.log(err));
   // }
 
    onSubmit(data){
      alert("on submit");
      alert("data: "+data.userName);
      this._auth.registerUser(data).subscribe(res=>console.log(res),err=>console.log(err)); 
     }
 
   password(formGroup: FormGroup) {
      const { value: password } = formGroup.get('password');
      const { value: confirm } = formGroup.get('confirm');
      return password === confirm ? null : { passwordNotMatch: true };
    }
 }
 