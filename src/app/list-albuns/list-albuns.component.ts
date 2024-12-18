import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albuns.component.html',
  styleUrls: ['./list-albuns.component.css']
})
export class ListAlbumsComponent implements OnInit {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  deleteAlbum(albumId: number): void {
    this.albumService.deleteAlbum(albumId).subscribe({
      next: () => {
        // Supprimer l'album de la liste après suppression réussie
        this.albums = this.albums.filter(album => album.id !== albumId);
      },
      error: (err) => {
        console.error('Erreur lors de la suppression de l\'album :', err);
      }
    });
  }

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe({
      next: (data: Album[]) => {
        console.log(data);
        this.albums = data;
      }
    });
  }
}
