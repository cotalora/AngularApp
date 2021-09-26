import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { PublicationsComponent } from './components/publications/publications.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'publications', component: PublicationsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
