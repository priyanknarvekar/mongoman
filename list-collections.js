const { MongoClient } = require('mongodb');
const uri = "mongodb://aquarius:8bvLvwnXqBnIgJiMZBkFBVbnXhSY7ivh@localhost:27017";
async function run() {
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('aquarius_stage');
  const cols = await db.listCollections().toArray();
  for (let c of cols) {
    const count = await db.collection(c.name).countDocuments();
    console.log(c.name, count);
  }
  await client.close();
}
run();
