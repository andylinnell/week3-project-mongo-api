import { MongoClient } from "mongodb";
import { mongocredentials } from "../secrets.js";

export function dbConnect() {
    const client = new MongoClient(mongocredentials.URI);
    return client.db(mongocredentials.db)
}