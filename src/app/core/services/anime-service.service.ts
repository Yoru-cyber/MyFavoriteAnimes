import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, retry, share} from 'rxjs';
import {IData} from '../../interfaces/IData';
@Injectable({
  providedIn: 'root'
})
export class AnimeServiceService {

  constructor(private http: HttpClient) { }

  getAnimeList():Observable<IData> {
    return this.http.get<IData>('https://api.jikan.moe/v4/top/anime?limit=5')
    .pipe(
      retry(1),
      share()
    );
  }

}