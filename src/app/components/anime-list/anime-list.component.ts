import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AnimeServiceService} from '../../core/services/anime-service.service';
import { HttpClientModule } from '@angular/common/http';
import { IData } from '../../interfaces/IData';
import { AnimeCardComponent } from '../anime-card/anime-card.component';
@Component({
  selector: 'app-anime-list',
  standalone: true,
  imports: [AsyncPipe, HttpClientModule, AnimeCardComponent],
  templateUrl: './anime-list.component.html',
  styleUrl: './anime-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimeListComponent {
  public AnimeResults$!: Observable<IData>;
  constructor(private animeService: AnimeServiceService) {
    
  }
  ngOnInit(): void {
    this.AnimeResults$ = this.animeService.getAnimeList();
  }
}
