import { Component, OnInit } from '@angular/core';
import { SwithmapService } from '../swithmap/swithmap.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  constructor( private service: SwithmapService) { }
  allCompanies$: any ;
  tipo = true;
  enableWifi = true;


  cambia(){
    this.enableWifi = !this.enableWifi;
    this.getList(this.enableWifi);

  }


  getList(value){
    this.service.get(value).subscribe(
      response => {this.allCompanies$ = response;
     },

      error => console.log(error.message)
     );
  }
  ngOnInit() {
    this.getList(this.enableWifi);
  }

}
