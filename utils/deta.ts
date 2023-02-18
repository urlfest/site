import { Deta } from "deta";
import type { Event } from "../interfaces";

const deta = Deta(process.env.NEXT_DETA_PROJECT_KEY)

const db = deta.Base('Domains')

db.fetch().then((res) => {
    if (res.count === 0) return db.put({
        slug: "lio",
        redirect: "https://lio.to"
    })
    else return
})

export default db