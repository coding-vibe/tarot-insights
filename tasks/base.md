# Basic tasks

## Card UI

**Goal** - implement card component

- Find API that serves images of cards.
- Prepare read-only constant that contains information about each card.
- Prepare file with constants that will contain names of each card. Each name should be used as unique key.

### TypeScript types setup

Prepare basic type for card. Try to classify card by criteria.

```ts
// Proposed card structure
interface Card {
  name: string;
  type: string;
}
```

## Save results

- Implement interface that will preserve information about card results.
- Create service for manipulation with `localStorage`. Should expose methods for insertion, removal and update of data.
- Save these results in `localStorage`.

```ts
interface Result {
  id: string;
  createdAt: Date;
  cards: [string, string, string]; // important - save list of names in `Card`
}
```

## Display of results

- Create a page with a list of saved results.
- Create a page with a single result.

## Integrate tarot API for individual cards

Get API for retrieval explanation about separate card.

## Implement auth

- Implement auth by google.
- Add route guard for access to pages with data
- Implement mechanism of logout without refresh when token is expired.

### Cache manager

Move data from `localStorage` to cache manager - i.e. Tanstack Query.
Implement caching for these endpoints:

- list of saved results

## AI integration for combination

## PRs list

### First PR ✅

1.  Implement comments in the service
2.  Create folders in the app for tarot-card and tarot-spread. Move models to these folders and rename suffix from .model.ts to .interface.ts
3.  Make all properties in tarotData camelCase and rename the file to tarot-data.ts

### Second PR

1.  Component for tarot card
2.  Form for save of tarot spread
