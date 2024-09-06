import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { SearchGifComponent } from './app/pages/search-gif/search-gif.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchGifComponent],
  template: `
    <app-search-gif/>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideHttpClient()],
});
