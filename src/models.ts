export interface IBeerItem {
  id: number;
  name: string;
  tagline: string;
  description: string;
  first_brewed: string;
}

export enum ApiStatus {
  LOADING = 'loading',
  LOADED = 'loaded',
  FAILED = 'failed',
}
