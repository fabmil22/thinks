import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private milePerKilometer = 0.62137;
  private kilometersPerMile = 1.609;

  constructor() { }

  fromKilometersToMiles = (kilometers: number) => kilometers * this.milePerKilometer;
  fromMilesToKilometers = (miles: number) => miles * this.kilometersPerMile;
}
