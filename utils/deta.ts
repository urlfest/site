import { Deta } from "deta";
import type { Event } from "../interfaces";

const deta = Deta(process.env.NEXT_DETA_PROJECT_KEY)

const db = deta.Base('urlfest')

db.fetch().then((res) => {
    if(res.count === 0) return db.put({
        slug: "lio",
        link: "https://himbo.cat"
    })
    else return
})

export default db