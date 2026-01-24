import { Component, Input } from '@angular/core';
import { TarotCard } from '../tarot-card.interface';

@Component({
  selector: 'tarot-card',
  templateUrl: './tarot-card.html',
  styleUrl: './tarot-card.scss',
})
export class TarotCardComponent {
  @Input({ required: true }) card!: Pick<TarotCard, 'name' | 'img'>;

  get cardId(): string {
    return this.card.name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]/g, '');
  }
}
