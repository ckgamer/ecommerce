import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import stringify from "json-stringify-safe";

export async function GET(request) {
  // // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("productDb");
    const movies = database.collection("products");

    //     // Query for a movie that has the title 'Back to the Future'
    const query = {};
    const movie = await movies.find(query).toArray();
    // const content = stringify(movie);
    // console.log(request);
    console.log(movie);
    return NextResponse.json({ movie });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}
