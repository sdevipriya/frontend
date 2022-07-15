import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {

  li:any;
  constructor(private http : HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:8083/media/getnewsfeed?userid=devipriya2@gmail.com')
    .subscribe(Response => {
      if(Response){  
      }
      console.log("response: "+Response)
      this.li=Response;
      console.log(this.li);
    });

  
  }

}
