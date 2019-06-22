import { MoviesService } from './../servicos/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  public info;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.moviesService.getDetails(id).subscribe(result => {
      console.log('detail:', result);
      this.info = result;
    });
  }

}
