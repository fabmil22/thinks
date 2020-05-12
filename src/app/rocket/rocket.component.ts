import { RocketService } from './../services/rocket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.scss']
})
export class RocketComponent implements OnInit {

  nextLaunches$;
  constructor(private rocketService: RocketService) {
    this.nextLaunches$ = this.rocketService.getNextLaunches();
    console.log('this.nextLaunches$: ', this.nextLaunches$);
  }


  ngOnInit() {
  }

}
