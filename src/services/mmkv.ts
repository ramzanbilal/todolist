import { MMKV } from "react-native-mmkv";

// Keys
export enum StorageKey {
  USER = "USER",
  TOKEN = "TOKEN",
  THEME = "THEME345",
}

// Types
export interface UserData {
  id: string;
  name: string;
  email: string;
}

export class MMKVSingleton {
  private static instance: MMKVSingleton;
  private storage = new MMKV();

  private constructor() {}

  public static getInstance(): MMKVSingleton {
    if (!MMKVSingleton.instance) {
      MMKVSingleton.instance = new MMKVSingleton();
    }
    return MMKVSingleton.instance;
  }

  setUser(user: UserData): void {
    this.storage.set(StorageKey.USER, JSON.stringify(user));
  }

  getUser(): UserData | null {
    const json = this.storage.getString(StorageKey.USER);
    return json ? JSON.parse(json) : null;
  }

  setToken(token: string): void {
    this.storage.set(StorageKey.TOKEN, token);
  }

  getToken(): string | null {
    return this.storage.getString(StorageKey.TOKEN) ?? null;
  }

  clear(): void {
    this.storage.delete(StorageKey.USER);
    this.storage.delete(StorageKey.TOKEN);
  }
}

export const inst = MMKVSingleton.getInstance();
