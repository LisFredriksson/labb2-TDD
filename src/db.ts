import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });


const connectionString: string =  process.env.MONGODB_URI as string;

async function connectToDatabase() {
  const  client = new MongoClient(connectionString);
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}

connectToDatabase().catch(console.error);

export default connectToDatabase;
