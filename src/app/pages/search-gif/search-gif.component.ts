import { Component } from '@angular/core';
import { Gif } from '../../interfaces/gif';
import { Observable } from 'rxjs';
import { GifService } from '../../services/gif.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-gif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-gif.component.html',
  styleUrl: './search-gif.component.css',
})
export class SearchGifComponent {
  gifResults$!: Observable<Gif[]>;

  constructor(private gifService: GifService) {}

  searchGif(searchParameter: string) {
    this.gifResults$ = this.gifService.getGif(searchParameter);
  }
}
