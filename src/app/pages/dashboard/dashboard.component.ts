import { Component } from '@angular/core';

import { ClientsService } from '../../services/clients.service';
import { MembershipsService } from '../../services/memberships.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  totalClients: number = 0;
  totalMemberships: number = 0;

  constructor(private clientsService: ClientsService, private membershipsService: MembershipsService) {}

  ngOnInit(): void {
    this.loadData(this.clientsService, this.membershipsService);
  }

  loadData(clientsService: ClientsService, membershipsService: MembershipsService) {
    let totalClients = clientsService.getClients().length;
    let totalMemberships = membershipsService.getMemberships().length;

    this.totalClients = totalClients;
    this.totalMemberships = totalMemberships;
  }
}
