const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // table name
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          const saltRound = 10;
          user.password = await bcrypt.has(user.password, saltRound);
        },
      },
      instanceMethods: {
        validPassword(password) {
          return bcrypt.compare(password, this.password);
        },
      },
    }
  );

  return User;
};
