# COVID-19 Server

## Getting Started

Rename `.env.example` to `.env` and insert the following. **Insert results using PyMongo first!**

1. PORT=<port> The port for the server to run on (5000 is the default)
2. MONGO='<uri_string>' The MongoDB connection URI (localhost or Mongo Atlas)
3. DB='<db_name>' The name of the database where the results will be stored

### Creating new endpoints

1. Add a new DB operation in `db.js`
2. Decouple the aggregation operation (if used) into `aggregations.js`
3. Create an endpoint to expose the DB op to an API in `routes.js`
4. Test the new route using Postman
