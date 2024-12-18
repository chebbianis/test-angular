import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'http://localhost:3000/albums';

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl);
  }


  getArchivedAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(this.apiUrl).pipe(
      map((albums) => albums.filter((album) => album.archived === 1))
    );
  }


  addAlbum(album: Album): Observable<Album> {
    const newAlbum = {
      ...album,
      id: null,
      archived: 0,
      creationDate: new Date().toISOString(),
    };
    return this.http.post<Album>(this.apiUrl, newAlbum);
  }

  deleteAlbum(albumId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${albumId}`);
  }
}
