/** Angular Imports */
import { Injectable } from '@angular/core';
//import { Resolve } from '@angular/router';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

/** rxjs Imports */
import { Observable } from 'rxjs';

/** Custom Services */
import { OrganizationService } from '../organization.service';

/**
 * Holidays data resolver.
 */
@Injectable()
export class HolidaysResolver implements Resolve<Object> {

  /**
   * @param {OrganizationService} organizationService Organization service.
   */
  constructor(private organizationService: OrganizationService) {}

  /**
   * Returns the Holiday data.
   * @returns {Observable<any>}
   */
  resolve(): Observable<any> {
    console.log('reached resolver');
 return this.organizationService.getHolidays();
 
  }
  //resolve(route: ActivatedRouteSnapshot): Observable<any> {
    //const officeId  = route.paramMap.get('1');
    //return this.organizationService.getHolidays(officeId);
  //}
}
