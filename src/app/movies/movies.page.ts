import { SearchType, MoviesService } from './../servicos/movies.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  public results: Observable<any>;
  public searchTerm = '';
  public type: SearchType = SearchType.all;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  public searchChanged() {
    this.results = this.moviesService.searchData(this.searchTerm, this.type);
    // this.results.subscribe(res => {
    //   console.log(res);
    // });
  }

}
