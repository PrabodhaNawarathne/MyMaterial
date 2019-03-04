import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLoginForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userLoginForm = new FormGroup({
      'userName': new FormControl(null,[
        Validators.required
      ]),
      'password': new FormControl(null,[
        Validators.required,
      ]),
    })
  }

  logIn() {
    console.log(this.userLoginForm.value['userName']+'--------'+this.userLoginForm.value['password'])
  }

  imageObject: Array<Object> = [{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/1200px-Heart_anterior_exterior_view.jpg',
    thumbImage: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/1200px-Heart_anterior_exterior_view_min.jpeg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/15459LG.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/tumblr_static_9o7ibetesk08wswo848w80ksc.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/1200px-Heart_anterior_exterior_view.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/15459LG.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/tumblr_static_9o7ibetesk08wswo848w80ksc.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/1200px-Heart_anterior_exterior_view.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/15459LG.jpg'
  },{
    image: 'D:/My_Web/Angular/MyMaterial/src/assets/slider/tumblr_static_9o7ibetesk08wswo848w80ksc.jpg'
  }]

}
