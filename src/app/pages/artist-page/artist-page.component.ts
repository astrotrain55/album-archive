import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import artists from '../../../db';
import { TypeAlbum, TypeItem, TypeItems } from '../../../db/types';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './artist-page.component.html',
  styleUrl: './artist-page.component.scss',
})
export class ArtistPageComponent implements OnInit {
  public artists: TypeItems = artists;
  public artistName: string = '';
  public artistId: string | null = null;
  public albums: TypeAlbum[] = [];

  constructor(private route: ActivatedRoute) {
    this.artistId = this.route.snapshot.paramMap.get('artist');
    if (!this.artistId) return;

    const artist: TypeItem = this.artists[this.artistId];
    this.artistName = artist.artist.name;
    this.albums = artist.artist.albums.map((albumId) => {
      return artist.albums[albumId];
    });
  }

  ngOnInit(): void {
    document.title = `${this.artistName} | Дискография`;
  }
}
