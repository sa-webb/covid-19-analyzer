const { MongoClient } = require('mongodb');
const options = require('../../config/index');
const dotenv = require('dotenv');

dotenv.config();

async function main() {
  const client = new MongoClient(process.env.MONGO, options);

  try {
    await client.connect();

    //await listDatabases(client);
    //await findOneListingByName(client, "Infinite Views");
    
    const records = await client
      .db('covid-19')
      .collection('march')
      .findOne({});
    console.log(records);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client
    .db()
    .admin()
    .listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

async function findOneListingByName(client, nameOfListing) {
  // See http://bit.ly/Node_findOne for the findOne() docs
  const result = await client
    .db('sample_airbnb')
    .collection('listingsAndReviews')
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}
