import { NextApiRequest, NextApiResponse } from "next"
import getEvents from "../../lib/getEvents"



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const events = await getEvents()
    
    return res.status(200).json(events)
  } catch (error) {
    return res.status(200).json(error)
  }
}
