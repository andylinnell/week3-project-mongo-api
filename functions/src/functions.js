import { mongocredentials } from "../secrets.js"
import { dbConnect } from "./dbConnect.js"

const collectionName = mongocredentials.collection

/* *********************************************************** */

// GET
export async function getAllDoc(req, res) {
    const db = dbConnect();
    const collection = await db.collection(collectionName).find({}).limit(10).toArray()

    console.table(collection)
    res.send(collection)
}

/* *********************************************************** */

// Get: Search
export async function findDoc(req, res) {
    const { search } = req.params
    
    const db = dbConnect()
    const collection = await db.collection(collectionName)
        .find( { ip_address: search})
        .toArray()

    console.table(collection)
    res.send(collection)
    
}

/* *********************************************************** */

// Post: Doc
export async function postDoc(req, res) {
    const newDoc = req.body
    // { "id":"2000", "first_name":"jojo","last_name":"mojo","email":"mojojojo@fojo.com","ip_address":"yourmom"}

    const db = dbConnect()
    await db.collection(collectionName).insertOne(newDoc)
    .catch(err => {
        res.start(500).send(err)
        return
    })
    res.status(201).send( {message: 'New Doc Inserted'})
}