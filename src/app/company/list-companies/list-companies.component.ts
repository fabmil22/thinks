import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SwithmapService } from 'src/app/swithmap/swithmap.service';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss']
})
export class ListCompaniesComponent implements OnInit , OnChanges {
displayedColumns: string[] = [ 'name', 'company', 'email'];
enableWifi = true;
@Input() list: any;
  constructor() { }
  ngOnChanges(changes): void {
    if (changes['list'] && !changes['list'].currentValue){
     console.log('no ha cambido');
    } else{
      console.log('si ha cambido');
    }

  }

  ngOnInit() {
    console.log('va', this.list);
  }

}
