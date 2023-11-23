import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import stringify from "json-stringify-safe";

export async function GET(request) {
  console.log("request.url.searchParams.query");
  const query = request.nextUrl.searchParams.get('query');
  const uri =
    "mongodb+srv://ckgamer:Xu4U1mQ6Rg2YQQwQ@cluster0.okyilff.mongodb.net/";
  const client = new MongoClient(uri);

  try {
    const database = client.db("stock");
    const inventory = database.collection("inventory");
    // const query = {};
    const products = await inventory.aggregate([
      {
        $match: {
          $or: [
            { productName: { $regex: query, $options: "i" } }, // 'i' for case-insensitive
            // { quantity: { $regex: "your-text-string", $options: "i" } },
            // { price: { $regex: "your-text-string", $options: "i" } },
          ],
        },
      },
      // Add any additional pipeline stages as needed
    ]).toArray();
    console.log(products);
    return NextResponse.json({ success: true, products });
  } finally {
    //     // Ensures that the client will close when you finish/error
    await client.close();
  }
}
