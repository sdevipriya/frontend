import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mediapage',
  templateUrl: './mediapage.component.html',
  styleUrls: ['./mediapage.component.css']
})
export class MediapageComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

}
