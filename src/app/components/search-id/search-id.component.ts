import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-id',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-id.component.html',
  styleUrl: './search-id.component.scss'
})
export class SearchIdComponent {
  clientSearchCtrl = new FormControl();
}
