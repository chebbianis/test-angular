import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './add-album/add-album.component';
import { ArchivesComponent } from './archive/archive.component';
import { ListAlbumsComponent } from './list-albuns/list-albuns.component';

const routes: Routes = [
  { path: 'album', component: ListAlbumsComponent },
  { path: 'archive', component: ArchivesComponent },
  { path: 'addAlbum', component: AddAlbumComponent },
  { path: 'photos/:albumId', component: ListAlbumsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
