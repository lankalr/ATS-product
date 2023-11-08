import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})


export class NewPasswordComponent {
  username:String='';
  password:String='';
  rememberMe:boolean=false;
  imageObject = [{
    image : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstocksnap.io%2Fsearch%2Foffice&psig=AOvVaw0rt4FOrr5BCICb3_u0jkIY&ust=1699044224600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDIxI2XpoIDFQAAAAAdAAAAABAK',
    thumbImage:'../../assets/side-image.jpg'
  }, {
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Foffice%2F&psig=AOvVaw0rt4FOrr5BCICb3_u0jkIY&ust=1699044224600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDIxI2XpoIDFQAAAAAdAAAAABAP',
    thumbImage:'../../assets/simage2.jpg'
  },
  {
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2020%2F04%2F24%2F840397136%2Fthe-office-as-we-knew-it-isnt-coming-back-anytime-soon-maybe-it-s-changed-foreve&psig=AOvVaw0rt4FOrr5BCICb3_u0jkIY&ust=1699044224600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDIxI2XpoIDFQAAAAAdAAAAABAi',
    thumbImage:'../../assets/simage3.jpg'
  },
  {
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3D%2522office%2Bbackground%2522&psig=AOvVaw0rt4FOrr5BCICb3_u0jkIY&ust=1699044224600000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNDIxI2XpoIDFQAAAAAdAAAAABAY',
    thumbImage:'../../assets/simage4.jpg'
  }];
  constructor(private router: Router) { }
  
  onLogin(){
    console.log('Logging in with:',this.username,this.password,this.rememberMe);
  }
  onCancel(){
    this.router.navigate(['/cancel']);
  }
}
