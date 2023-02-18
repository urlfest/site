export type Event = {
  id: number
  redirect: string
  slug: string
}

export interface FetchResponse {
  items: Event[];
  count: number;
  last?: string;
}

// I need to push something to github so here you go