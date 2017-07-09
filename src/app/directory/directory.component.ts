import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';
import { DataService } from '../data.service';
declare var firebase: any;

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
	// show: boolean = true;
	name = '';
  ninjas = [];

  constructor(private route: ActivatedRoute, private logger: LoggingService, private dataService: DataService) {
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params);
	}

  logMe() {
      this.logger.log();
  }

  ngOnInit() {
    // this.dataService.fetchData().subscribe(
    //     data => this.ninjas = data
    //   );

    this.fbGetData();
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val())
    });
  }

  fbPostData(name, belt) {
    firebase.database().ref('/').push({ name: name, belt: belt});
  }
}
