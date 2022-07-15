import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { FormGroup, FormControl, FormBuilder, FormArray} from '@angular/forms';
@Component({
  selector: 'app-multimedia',
  templateUrl: './multimedia.component.html',
  styleUrls: ['./multimedia.component.css']
})
export class MultimediaComponent implements OnInit {

 // multiMediaForm: FormGroup;

  name = 'Angular';
  multiMediaForm: FormGroup;
  arr: FormArray;

  constructor(private _auth:AuthService,private formBuilder: FormBuilder) {
    this.multiMediaForm=this.formBuilder.group({
    arr:new FormControl(),
    mediaURL:new FormControl(),
    mediaTitle: new FormControl(),
    description: new FormControl(),
    tags: new FormControl(),
    effects: new FormControl()
      
   })
   }


  ngOnInit() {
    this.multiMediaForm = this.formBuilder.group({
      arr: this.formBuilder.array([this.createItem()])
    })

  }

  createItem() {
    return this.formBuilder.group({
      mediaURL: [''],
      mediaTitle: [''],
      description: [''],
      tags: [''],
      effects: ['']

    })
  }

  addItem() {
    this.arr = this.multiMediaForm.get('arr') as FormArray;
    this.arr.push(this.createItem());
  }

  onSubmit(data){
 console.log(data.value);
      // console.log("data: "+this.multiMediaForm.value.mediaURL);
   this._auth.saveMultiMedia(data.get("arr").value).subscribe(res=>console.log(res),err=>console.log(err)); 
  }

}
