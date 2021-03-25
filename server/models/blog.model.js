module.exports = (sequelize, DataTypes) => {
	const Blog = sequelize.define(
		'blog',
		{
			id: {
				type: DataTypes.STRING(50),
				allowNull: false,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			status: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			content: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			category: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			user_id: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
		},
		{
			// Other model options go here
		}
	);

	Blog.associate = function (models) {
		Blog.belongsTo(models.User, { as: 'author', foreignKey: 'user_id'})
	}

	return Blog;
};