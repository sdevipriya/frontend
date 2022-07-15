import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // registerUserData={};
  // registerForm: FormGroup = new FormGroup({});
  registerForm: FormGroup;
  selectedFile : File = null;

  constructor(private _auth:AuthService,public formBuilder: FormBuilder, private http:HttpClient) {
    this.registerForm = this.formBuilder.group({
      firstName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern('[a-zA-Z]')
      ])),
      lastName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern('[a-zA-Z]')
      ])),
      userName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
        Validators.pattern('[a-zA-Z]')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
       ])),
      confirm: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12)
      ])),
      userId: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email,
        Validators.minLength(8),
        Validators.maxLength(16)
      ])),
      profilePictureUrl:new FormControl('', Validators.compose([
        Validators.required
      ]))

   }, { 
    validators: this.password.bind(this)
  });
    
  }
  
  

  ngOnInit() {
  }

  error_messages = {
    'firstName': [
      { type: 'required', message: 'First Name is required.' },
    ],
    'lastName': [
      { type: 'required', message: 'Last Name is required.' },
    ],
    'userName': [
      { type: 'required', message: 'User Name is required.' },
    ],
     'password': [
       { type: 'required', message: 'password is required.' },
       { type: 'minlength', message: 'password min length must be 8.' },
       { type: 'maxlength', message: 'password max length must be 16.' }
     ],
     'confirm': [
        { type: 'required', message: 'password is required.' },
       { type: 'minlength', message: 'password min length must be 8.' },
       { type: 'maxlength', message: 'password max length must be 16.' }
     ],
     'userId':[
      { type: 'required', message: 'userId is required.' },
      { type: 'email', message: 'userId should be proper email' },
      { type: 'maxlength', message: 'userId length.' }
     ]
  }
  // registerUser(){
  //  console.log(this.registerUserData); 
  //   this._auth.registerUser(this.registerUserData).subscribe(res=>console.log(res),err=>console.log(err));
  // }

   onSubmit(data){

    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    console.log("fd: "+fd);

    this.http.post('http://localhost:8085/user/upload', fd)
    .subscribe(res => {
      console.log(res);
      alert("res:"+res);
  }, err=>{console.log(err)
     alert("err:"+err);
 });



     alert("on submit");
     alert("data: "+data.userName);
     this._auth.registerUser(data).subscribe(res=>console.log(res),err=>console.log(err)); 
    }

  password(formGroup: FormGroup) {
     const { value: password } = formGroup.get('password');
     const { value: confirm } = formGroup.get('confirm');
     return password === confirm ? null : { passwordNotMatch: true };
   }


   onFileSelected(event){
    this.selectedFile = <File> event.target.files[0];
  }

}
