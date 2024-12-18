import { Component } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.css']
})
export class AddAlbumComponent {
  album: Album = new Album();

  constructor(private albumService: AlbumService) { }

  saveAlbum(form: any) {
    if (form.valid) {
      const albumData = form.value;
      this.albumService.addAlbum(albumData).subscribe({
        next: (newAlbum) => {
          console.log('Album ajouté avec succès :', newAlbum);
        }
      });
    } else {
      console.log('Formulaire invalide');
    }
  }
}
