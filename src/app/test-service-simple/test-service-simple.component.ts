import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-test-service-simple',
  template: `<div *ngIf="data$">
    <ul>
      <li *ngFor="let item of data$ | async">{{ item.author}}</li>
    </ul>
  </div>`,
  styleUrls: ['./test-service-simple.component.scss']
})
export class TestServiceSimpleComponent implements OnInit {

  constructor( private service: DataService) { }
  data$ = this.service.getAll();


  ngOnInit() {
    this.data$ = this.service.getAll();
  }

}
