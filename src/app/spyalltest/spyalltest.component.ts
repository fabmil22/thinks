import { Component, OnInit } from '@angular/core';
import { IncrementDecreService } from './increment-decre.service';

@Component({
  selector: 'app-spyalltest',
  template:
  `<h1>{{ incrementDecrement.value }}</h1>

  <button (click)='increment()' class='increment'>Increment</button>
  <button (click)='decrement()' class='decrement'>Decrement</button>

  <p class='message'>
    {{ incrementDecrement.message }}
  </p>`,
  styleUrls: ['./spyalltest.component.scss']
})
export class SpyalltestComponent implements OnInit {

  constructor(public incrementDecrement: IncrementDecreService) {}

  ngOnInit() {
  }
  sayHelloWorld(dict) {
    return this.hello() + ' ' + this.world();
  }

  hello() {
    return 'hello';
  }

  world() {
    return 'world';
  }

  increment() {
    this.incrementDecrement.increment();
  }
  decrement() {
    this.incrementDecrement.decrement();
  }

}
