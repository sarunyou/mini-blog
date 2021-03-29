const UserEntity = (data) => {
  if (!data) return {};
  return {
    id: data.id,
    username: data.username,
  };
};

module.exports = {
  UserEntity,
};
