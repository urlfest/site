import { Event, FetchResponse } from '../interfaces';
import db from '../utils/deta';

export default async function getEvents() {
  try {
    const events = await db.fetch()
    delete events.last
    return events
  } catch (error) {
    console.error("getEvents", error)
    throw new Error(error)
  }
}
