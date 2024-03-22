import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isSidebarExpanded: boolean = false;

  toggleSidebar() {
    let sidebar = document.getElementById('sidebar');
    if (this.isSidebarExpanded) {
      sidebar?.classList.add('expand');
    } else {
      sidebar?.classList.remove('expand');
    }
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }
}
