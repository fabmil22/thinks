import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/converter/calculator.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  miles: number;
  kilometers: number;

  constructor(private calculo: CalculatorService) { }

  ngOnInit() {
  }

  converter() {
    this.miles = this.calculo.fromKilometersToMiles(this.kilometers);
  }
}
