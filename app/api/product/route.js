import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import stringify from "json-stringify-safe";

export async function GET(request) {
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    const query = {};
    const products = await inventory.find(query).toArray();
    // console.log(products);
    return NextResponse.json({ success:true, products });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}

export async function POST(request) {
  let body = await request.json();
  // console.log(body);
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    const query = {};
    const product = await inventory.insertOne(body);
    // console.log(product);
    return NextResponse.json({ product, ok: true });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}
