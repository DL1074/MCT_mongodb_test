import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';

const client = new MongoClient('mongodb+srv://brother1:2ccvhcswyaS0Zu2F@cluster0.9agbeya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function database(req, res, next) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db('MCT');
  return next();
}

const middleware = nextConnect();

middleware.use(database);

export default middleware;

