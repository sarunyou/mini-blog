module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'user', // table name
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
			},
			password: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			// Other model options go here
		}
	);

	return User;
};