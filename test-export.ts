import { MongoClient } from 'mongodb';
import { EJSON } from 'bson';

async function main() {
  console.log("Testing export...");
  const obj = { _id: "123", date: new Date() };
  console.log(EJSON.serialize(obj));
}

main().catch(console.error);
