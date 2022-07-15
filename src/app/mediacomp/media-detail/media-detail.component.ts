import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-media-detail',
  templateUrl: './media-detail.component.html',
  styleUrls: ['./media-detail.component.css']
})
export class MediaDetailComponent implements OnInit {
  public id;
  li:any;
  com:any;
  constructor(private http : HttpClient, private route: ActivatedRoute) { }

  ngOnInit():void {

    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.http.get('http://localhost:8083/media/myMedia/'+this.id)
    .subscribe(Response => {
   if(Response){  
      }
      console.log("response: "+Response)
      this.li=Response;
      console.log(this.li);
    });

    this.http.get('http://localhost:8083/media/getComment?mediaid='+this.id)
    .subscribe(Response => {
   if(Response){  
      }
      console.log("response: "+Response)
      this.com=Response;
      console.log("com"+this.com);
    });

   }
   msg='';
   onEnter(e) {
     e.preventDefault();
    this.http.post('http://localhost:8083/media/addComment/'+this.id+'/'+this.msg+'/'+this.li.userid,'')
    .subscribe(Response => {
      
      if(Response){  
    }
 });
    this.ngOnInit();
    this.msg= ' ';
  }
  
  
  
 

}
