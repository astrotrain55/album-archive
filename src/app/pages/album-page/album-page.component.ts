import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StreamingListComponent } from '../../components/ui/streaming-list/streaming-list.component';
import artists from '../../../db';
import { TypeAlbum, TypeItem, TypeItems, TypeSong } from '../../../db/types';

@Component({
  selector: 'app-album-page',
  standalone: true,
  imports: [RouterLink, StreamingListComponent],
  templateUrl: './album-page.component.html',
  styleUrl: './album-page.component.scss',
})
export class AlbumPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public album: TypeAlbum | null = null;
  public songs: (TypeSong | { name: string; id: string })[] = [];

  constructor(private route: ActivatedRoute) {
    this.artistId = this.route.snapshot.paramMap.get('artist');
    const albumId: string | null = this.route.snapshot.paramMap.get('album');
    if (!this.artistId || !albumId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.album = artist.albums[albumId];
    this.songs = this.album.songs.map((songId) => {
      if (typeof songId === 'string') {
        const song = artist.songs[songId];
        return {
          id: song.id,
          name: song.name[0],
        };
      }
      if (Array.isArray(songId)) {
        const [id, { name }] = songId;
        return {
          id,
          name: name[0],
        };
      }
      return { name: songId.name, id: '' };
    });
  }

  ngOnInit(): void {
    document.title = `${this.album?.name} (${this.album?.year}) | ${this.artistName}`;
  }
}
