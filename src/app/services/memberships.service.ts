import { Injectable } from '@angular/core';
import { Membership } from '../models/membership.model';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {

  memberships: Membership[] = [{
      id: 1,
      cost: 80,
      description: "La más básica de las membresías",
      duration: "30 días",
      name: "Membresía básica"
    }, {
      id: 2,
      cost: 70,
      description: "La membresía nivel medio",
      duration: "45 días",
      name: "Membresía media"
    }, {
      id: 3,
      cost: 50,
      description: "La membresía de nivel premium de 60 días",
      duration: "60 días",
      name: "Membresía premium"
    }
  ];

  constructor() { }

  getMemberships() {
    return this.memberships;
  }
}
