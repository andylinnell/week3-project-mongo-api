import functions from "firebase-functions"
import express from "express"
import cors from "cors"
import { getAllDoc, postDoc, findDoc } from "./src/functions.js";

const app = express()
app.use( express.json())
app.use( cors())


// Functions
/* *********************************************************** */
// Get: Get All
app.get("/getall", getAllDoc)

/* *********************************************************** */
// Get: Search
app.get("/search/:search", findDoc)

/* *********************************************************** */
// Post: Add Doc
app.post("/post", postDoc)

// app.listen(PORT, () => console.log(`listening on http//:localhost:${PORT}`))
export const api = functions.https.onRequest( app );

