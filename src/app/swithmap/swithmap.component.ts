import { SwithmapService } from './swithmap.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap} from 'rxjs/operators';


@Component({
  selector: 'app-swithmap',
  templateUrl: './swithmap.component.html',
  styleUrls: ['./swithmap.component.scss']
})
export class SwithmapComponent implements OnInit {

  isChecked = true;
  formGroup: FormGroup;
  customers: any;
  formattedMessage: string;
  companies: any;

  constructor(formBuilder: FormBuilder ,private  customersService: SwithmapService) {
    this.formGroup = formBuilder.group({
      enableWifi: true,
      acceptTerms: ['', Validators.requiredTrue],
      selectCompany: '',
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }




ngOnInit() {

  this.formGroup.get('enableWifi').valueChanges.pipe(
    switchMap(() => this.getComments())
    ).subscribe(x => {
    console.log('form value changed')
    console.log('esta',x);
    this.companies = x;
  })



}

  getComments = () =>{
  return  this.customersService.get(this.formGroup.controls.enableWifi.value);
}


  }




