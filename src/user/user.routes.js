const { Router } = require('express');

const UserModel = require('./User.model');

const router = Router();

// GET - To Get All Users
router.get('/', async (req, res) => {
  const users = await UserModel.find();

  res.send({ users });
});

// POST - Create Users
router.post('/', async (req, res) => {
  const u = new UserModel();
  console.log('Req.body', req.body);
  u.name = req.body.name;
  u.email = req.body.email;

  await u.save();

  res.send({ message: 'User Created' });
});

// GET - 1 User Detail
router.get('/:userId', async (req, res) => {
  console.log('req.params', req.params);
  const user = await UserModel.findOne({ _id: req.params.userId });

  res.send({ user });
});

// DELETE one

// Update one

module.exports = router;
