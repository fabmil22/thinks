import { Company } from './../swithmap/model/company';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Course {

}

@Injectable({
    providedIn: 'root'
})
export class CompanyAdapter implements Adapter<Company> {

  adapt(item: any): Company {
    return new Company(
      item.id,
      item.isActive,
      item.name,
      item.company,
      item.email,
      item.phone,
      item.address,
      item.registered,
      item.latitude,
      item.longitude
    );
  }
}
