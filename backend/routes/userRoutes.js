const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, updateUser, deleteUser, forgotPassword } = require('../controllers/userController');

router.route('/')
    .get(getUsers)
    .post(createUser);

router.post('/login', loginUser);
router.post('/forgot-password', forgotPassword);

router.route('/:id')
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;
