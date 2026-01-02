import { JSONValue } from './json-value.type';

export class StorageService {
  get<T>(key: string): T | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  add(key: string, value: JSONValue): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  update<T>(key: string, updateValue: (prevValue: T) => T): void {
    const prevValue = this.get<T>(key);

    if (!prevValue) {
      throw new Error(`No data in ${key} key`);
    }

    const updatedValue = updateValue(prevValue);
    localStorage.setItem(key, JSON.stringify(updatedValue));
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}

/**
 * First PR
 * 1. Implement comments in the service
 * 2. Create folders in the app for tarot-card and tarot-spread. Move models to these folders and rename suffix from .model.ts to .interface.ts
 * 3. Make all properties in tarotData camelCase and rename the file to tarot-data.ts
 *
 * Second PR
 * 1. Component for tarot card
 * 2. Form for save of tarot spread
 */
