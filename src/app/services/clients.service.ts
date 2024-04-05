import { Injectable } from '@angular/core';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  clients: Client[] = [{
      id: 1,
      address: "Calle 20",
      email: "danielj.pay@hotmail.com",
      last_name: "Pérez",
      name: "Daniel",
      phone: 9991234567
    }, {
      id: 2,
      address: "Calle 23",
      email: "oscar.pay4@gmail.com",
      last_name: "Pérez",
      name: "Óscar",
      phone: 9991587642
    }, {
      id: 3,
      address: "Calle 21",
      email: "manuprz8142@hotmail.com",
      last_name: "Pérez",
      name: "Manuel",
      phone: 9997894561
    }
  ]

  constructor() { }

  getClients() {
    return this.clients;
  }
}
