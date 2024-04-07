import { Component, Input } from '@angular/core';

import { Client } from '../../models/client.model';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.scss'
})
export class ClientCardComponent {
  @Input() clients: Client[] = [];
}
