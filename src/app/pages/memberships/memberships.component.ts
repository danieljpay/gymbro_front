import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Membership } from '../../models/membership.model';
import { MembershipsService } from '../../services/memberships.service';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.scss'
})
export class MembershipsComponent {

  MEMBERSHIPS: Membership[] = [];

  constructor(private membership_service: MembershipsService) {}

  ngOnInit(): void {
    this.loadMemberships();
  }

  loadMemberships() {
    this.MEMBERSHIPS = this.membership_service.getMemberships();
  }
}
