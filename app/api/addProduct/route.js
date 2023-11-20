import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import stringify from "json-stringify-safe";

export async function GET(request) {
  // // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    const query = {};
    const allProducts = await inventory.find(query).toArray();
    // const content = stringify(movie);
    // console.log(request);
    console.log(movie);
    return NextResponse.json({ allProducts });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}
export async function POST(request) {
  let body = request.body;
  // // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    const product = await inventory.insertOne(body);
    console.log(product);
    return NextResponse.json({ product });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}
