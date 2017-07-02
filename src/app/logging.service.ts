import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
	// private userLogin;
	
	public log() {
		console.log('Logging is currently');
	}
  constructor() { 
  	// this.userLogin = false;
  }

  // setUserLogin() {
  // 	this.userLogin = true;
  // }
  // public getUserLogin() {
  // 	return this.userLogin;
  // }
}
