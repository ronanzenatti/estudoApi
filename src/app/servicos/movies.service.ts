import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = 'http://www.omdbapi.com/';
  private apiKey = 'e1066ea7';

  constructor(private http: HttpClient) { }

  public searchData(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  public searchData1(title: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`).pipe(
      map(results => results['Search'])
    );
  }

  public getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
}
