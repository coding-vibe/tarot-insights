import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarotCardComponent } from './tarot-card/tarot-card/tarot-card';
import { tarotData } from './tarot-card/tarot-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarotCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('tarot-insights');
  cards = tarotData;
}
