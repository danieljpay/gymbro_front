import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  CLIENTS: Client[] = [];

  constructor(private client_service: ClientsService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.CLIENTS = this.client_service.getClients();
  }
}
