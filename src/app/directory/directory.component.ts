import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
	show: boolean = true;
	ninjas = [
		{ name: 'Bryan', belt: 'gold' },
		{ name: 'zai', belt: 'silver' },
		{ name: 'bry', belt: 'pink' }
	];
	name = '';

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.params['name'];
    console.log(this.route.snapshot.params);
    // this.route.params.subscribe( params => console.log(params) );
	}

  ngOnInit() {
  }

}
