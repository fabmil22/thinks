import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent {

  constructor() { }


  doSmth(reachedTarget: boolean): void {
      if (reachedTarget) {
          console.log('Yeah, we reached our destination');
      } else {
          console.log('Ohoh, something interrupted us');
      }
  }

}
