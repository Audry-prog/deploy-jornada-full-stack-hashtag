// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://dbAudry:db1234@cluster0.hnerq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotifyHashtag");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
