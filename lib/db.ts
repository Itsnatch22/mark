// lib/db.ts
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string;
const dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient | null = null;

async function connectToDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri);
  cachedClient = client;
  return client;
}

export async function saveToDatabase(formData: any) {
  if (!uri) {
    console.warn('MongoDB URI not configured - skipping database save');
    return;
  }

  try {
    const client = await connectToDatabase();
    const db = client.db(dbName);
    
    await db.collection('contact_submissions').insertOne({
      ...formData,
      createdAt: new Date(),
      ipAddress: formData.ipAddress || null,
      userAgent: formData.userAgent || null
    });
  } catch (error) {
    console.error('Database save error:', error);
    throw error;
  }
}