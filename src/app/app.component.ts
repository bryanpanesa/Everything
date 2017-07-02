import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Everything';
  subtitle = 'Keeping your brain intact in one place.';
  day = new Date();
  logoutClick = true;
  loginNow(){
  	this.logoutClick = false;
  }
  logoutNow(){
  	this.logoutClick = true;
  }
}
