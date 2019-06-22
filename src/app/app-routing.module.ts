import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'clima', loadChildren: './clima/clima.module#ClimaPageModule' },
  { path: 'movies', loadChildren: './movies/movies.module#MoviesPageModule' },
  { path: 'movie/:id', loadChildren: './movie-details/movie-details.module#MovieDetailsPageModule' },
  { path: 'users', loadChildren: './users/users/users.module#UsersPageModule' },
  { path: 'user/:id', loadChildren: './users/user-details/user-details.module#UserDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
