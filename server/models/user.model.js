const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user", // table name
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
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
      underscored: true,
      paranoid: true,
      hooks: {
        beforeCreate: async (user) => {
          const saltRound = 10;
          user.password = await bcrypt.hash(user.password, saltRound);
        },
      },
    }
  );

  User.prototype.isSamePassword = function (password) {
    return bcrypt.compare(password, this.password);
  };

  return User;
};
