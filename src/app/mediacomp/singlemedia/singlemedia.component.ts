import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { HttpClient, HttpRequest} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-singlemedia',
  templateUrl: './singlemedia.component.html',
  styleUrls: ['./singlemedia.component.css']
})
export class SinglemediaComponent implements OnInit {
  
    singleMediaForm: FormGroup;
    file: File = null;
    shortLink: string = "";
    loading: boolean = false; 
    selectedFile : File = null;
    userName : any;
    token:any;
    userId:any;
  
    constructor(private _auth:AuthService,public formBuilder: FormBuilder, private http:HttpClient, private route: ActivatedRoute) {
    this.singleMediaForm=this.formBuilder.group({
      mediaURL:new FormControl(),
      mediaTitle: new FormControl(),
      description: new FormControl(),
      tags: new FormControl(),
      effects: new FormControl()

    })
   }

  ngOnInit() {
    this.userName = localStorage.getItem("userName");
    this.token = localStorage.getItem("token");
    this.userId = localStorage.getItem("userId");
    console.log(this.userName);
  }

  onChange(event) {
    this.file = event.target.files[0];
}
onFileSelected(event){
  this.selectedFile = <File> event.target.files[0];
}

onUpload(){
  alert("on upload")
  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);
  console.log("fd: "+fd);
  
   this.http.post('http://localhost:8083/media/upload', fd)
     .subscribe(res => {
       console.log(res);
       alert("res:"+res);
   }, err=>{console.log(err)
      alert("err:"+err);
  });

  // const req = new HttpRequest('POST', `http://localhost:8083/media/upload/files`, fd,{
  //   reportProgress: true,
  //   responseType: 'json'
  // });

}  
  onSubmit(data){

    
  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);
  console.log("fd: "+fd);
  
   this.http.post('http://localhost:8083/media/upload', fd)
     .subscribe(res => {
       console.log(res);
       alert("res:"+res);
   }, err=>{console.log(err)
      alert("err:"+err);
  });


   // alert("on submit");
    //alert(data);
    console.log(data);
    this._auth.saveMedia(data, this.token).subscribe(res=>console.log(res),err=>console.log(err)); 
  }
}
