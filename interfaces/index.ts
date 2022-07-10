export type Event = {
  id: number
  link: string
  slug: string
}

export interface FetchResponse {
  items: Event[];
  count: number;
  last?: string;
}
