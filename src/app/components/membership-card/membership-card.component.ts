import { Component, Input } from '@angular/core';

import { Membership } from '../../models/membership.model';

@Component({
  selector: 'app-membership-card',
  standalone: true,
  imports: [],
  templateUrl: './membership-card.component.html',
  styleUrl: './membership-card.component.scss'
})
export class MembershipCardComponent {
  @Input() memberships: Membership[] = [];
}
