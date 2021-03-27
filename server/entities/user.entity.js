const UserEntity = (data) => {
  if (!data) return {};
  return {
    id: data.id,
    name: data.name,
  };
};

module.exports = {
  UserEntity,
};
