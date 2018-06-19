import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string;
  password:string;
  constructor(public navCtrl: NavController) {

  }
  login(){
    console.log("Username: "+ this.username)
    console.log("Password: "+ this.password)
    if (this.username.length==0 || this.password.length==0)
alert("Please enter the missing fields");
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
}
