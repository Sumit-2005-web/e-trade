const { model } = require('mongoose');
const bcrypt = require('bcryptjs');

const { UserSchema } = require('../schemas/UserSchema');

const UserModel = model("user", UserSchema);

module.exports = { UserModel };


