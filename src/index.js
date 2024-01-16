const express = require('express');
const mongoose = require('mongoose');

const UserRoutes = require('./user/user.routes');

const app = express();
const port = 3000;

async function main() {
  await mongoose.connect(
    'mongodb+srv://admin:SXdQ5ErVyUewPtsE@hello-node.lmbw58q.mongodb.net/',
    {
      dbName: 'test',
    }
  );

  app.use(express.json());
  app.get('/', (req, res) => res.send('Ok'));
  app.use('/users', UserRoutes);

  app.listen(port, () => console.log(`Listening on port ${port}`));
}

main().catch((err) => console.log(err));
