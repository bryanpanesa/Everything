import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
	// show: boolean = true;
	
	name = '';

  constructor(private route: ActivatedRoute, private logger: LoggingService) {
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params);
	}

  logMe() {
      this.logger.log();
  }

  ngOnInit() {
    
  }

}
