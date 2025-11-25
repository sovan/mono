import { Injectable, OnModuleInit } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

@Injectable()
export class AnyService implements OnModuleInit {
  private client: MongoClient;
  private db: Db;

  async onModuleInit() {
    const uri = 'mongodb://localhost:27017/yourDatabaseName'; // Replace with your MongoDB URI
    this.client = new MongoClient(uri);
    await this.client.connect();
    this.db = this.client.db(); // Get the default database or specify a name: this.client.db('yourDatabaseName')
  }

  async insertData(collectionName: string, data: any): Promise<any> {
    const collection = this.db.collection(collectionName);
    const result = await collection.insertOne(data);
    return result;
  }

  async findAll(collectionName: string): Promise<any> {
    const collection = this.db.collection(collectionName);
    const result = await collection.find({}).toArray();
    return result;
  }
}
