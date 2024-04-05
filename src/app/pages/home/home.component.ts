import { Component } from '@angular/core';

import { Client } from '../../models/client.model';
import { ClientsService } from '../../services/clients.service';
import { SearchIdComponent } from '../../components/search-id/search-id.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchIdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  CLIENTS: Client[] = [];

  constructor(private client_service: ClientsService) {}

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients() {
    this.CLIENTS = this.client_service.getClients();
  }
}
