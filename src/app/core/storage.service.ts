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
