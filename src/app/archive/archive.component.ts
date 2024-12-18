import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchivesComponent implements OnInit {
  archivedAlbums: Album[] = [];

  constructor(private albumService: AlbumService) { }

  ngOnInit(): void {
    this.albumService.getArchivedAlbums().subscribe({
      next: (data: Album[]) => {
        console.log('Albums archivés :', data);
        this.archivedAlbums = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des albums archivés :', err);
      },
    });
  }
}
