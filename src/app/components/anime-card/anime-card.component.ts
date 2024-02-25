import { Component, Input } from '@angular/core';
import { IAnime } from '../../interfaces/IAnime';

@Component({
  selector: 'app-anime-card',
  standalone: true,
  imports: [],
  templateUrl: './anime-card.component.html',
  styleUrl: './anime-card.component.css'
})
export class AnimeCardComponent {
 @Input () anime!: IAnime;
}
