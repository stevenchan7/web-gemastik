const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [5],
      is: /^[a-zA-z0-9]\w+$/,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: 111,
    allowNull: false,
  },
});

User.sync();

module.exports = User;
