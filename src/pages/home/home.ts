import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
    console.log('Navigating to login');
    this.navCtrl.push('LoginPage');
  }
  navigateToRegister() {
    console.log('navigating to register');
  }

}
