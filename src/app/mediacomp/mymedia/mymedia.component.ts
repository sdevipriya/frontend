import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-mymedia',
  templateUrl: './mymedia.component.html',
  styleUrls: ['./mymedia.component.css']
})
export class MymediaComponent implements OnInit {
  li:any;
  lis:any;
  constructor(private http : HttpClient){
  }

  ngOnInit():void {
    console.log(sessionStorage.getItem("userId"));
    console.log(sessionStorage.getItem("token"));
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+sessionStorage.getItem('token') });
     let options = { headers: headers };
    this.http.get('http://localhost:8762/media/myMedia?userid='+sessionStorage.getItem("userId"), options)
    .subscribe(Response => {
      if(Response){  
      }
      console.log("response: "+Response)
      this.li=Response;
      console.log(this.li);
    });

   }

   like(mediaId, userId){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+sessionStorage.getItem('token') });
     let options = { headers: headers };
     this.http.post('http://localhost:8762/media/like/'+userId+'/'+mediaId,'',options)
    .subscribe(Response => {
      if(Response){  
        this.ngOnInit();
      }
      console.log("response: "+Response)
      this.lis=Response;
      console.log(this.lis);
    });
    
   }
   dislike(mediaId, userId){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+sessionStorage.getItem('token') });
     let options = { headers: headers };
    this.http.post('http://localhost:8083/media/dislike/'+userId+'/'+mediaId,'',options)
   .subscribe(Response => {
     if(Response){  
      this.ngOnInit();
     }
     console.log("response: "+Response)
     this.lis=Response;
     console.log(this.lis);
   });


  }

  }


