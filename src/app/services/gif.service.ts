import { Injectable } from '@angular/core';
import { Result, Gif } from '../interfaces/gif';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private readonly gifApi =
    'https://api.giphy.com/v1/gifs/search?api_key=3kOXnkgcl4689sN5VuWOh5ramfNOdU0g&q=';

  constructor(private httpClient: HttpClient) {}

  getGif(searchTerm: string): Observable<Gif[]> {
    return this.httpClient
      .get<Result>(this.gifApi + searchTerm)
      .pipe(map((response: Result) => response.data));
  }
}
