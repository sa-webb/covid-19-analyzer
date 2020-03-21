// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const logger = require('morgan');
// const { MongoClient } = require('mongodb');

// const options = require('./config/index');
// dotenv.config();

// const app = express();
// app.use(logger('dev'));
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// async function main() {
//   const client = new MongoClient(process.env.MONGO, options);
//   const dataRouter = require('./src/routes/data.routes');
//   app.use('/data', dataRouter);
//   app.get('/', res => {
//     res.status(200).json({ message: 'Welcome to my API' });
//   });

//   const port = process.env.PORT || 5000;
//   app.listen(port, () => {
//     console.log(`App running on ${port}`);
//   });

//   try {
//     await client.connect();
//   } catch (e) {
//     console.error(e);
//   } finally {
//     await client.close();
//   }
// }

// main().catch(console.error);
