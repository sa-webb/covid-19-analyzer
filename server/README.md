# COVID-19 Server

Express server to provide data to the client.

## Getting Started

Remember to **insert results using PyMongo first!**

### Configuration

Rename `.env.example` to `.env` and insert the following.

1. PORT=5000 The port for the server to run on (5000 is the default)
2. MONGO='<uri_string>' The MongoDB connection URI (localhost or Mongo Atlas)
3. DB='<db_name>' The name of the database where the results will be stored

### Workflow

1. Add a new DB operation in `db.js`
2. Decouple the aggregation operation (if used) into `aggregations.js`
3. Create an endpoint to expose the DB op to an API in `routes.js`
4. Test the new route using Postman
5. Call the route with the client
