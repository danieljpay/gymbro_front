import { Component } from '@angular/core';
import { SearchIdComponent } from '../../components/search-id/search-id.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchIdComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
