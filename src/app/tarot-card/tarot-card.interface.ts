export interface TarotCard {
  name: string;
  number: string;
  arcana: string;
  suit: string;
  img: string;

  fortuneTelling: string[];
  keywords: string[];

  meanings: {
    light: string[];
    shadow: string[];
  };

  archetype?: string;
  hebrewAlphabet?: string;
  numerology?: string;
  astrology?: string;
  affirmation?: string;
  elemental?: string;
  mythicalOrSpiritual?: string;
  questionsToAsk: string[];
}
