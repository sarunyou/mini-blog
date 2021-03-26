const createRepository = (model) => {
  const create = (...data) => {
    return model.create(...data);
  };

  const bulkCreate = (...data) => {
    return model.bulkCreate(...data);
  };

  const findAll = (...data) => {
    return model.findAll(...data);
  };

  const findOne = (...data) => {
    return model.findOne(...data);
  };

  const update = (...data) => {
    return model.update(...data);
  };

  const destroy = (...data) => {
    return model.destroy(...data);
  };

  return {
    create,
    findAll,
    update,
    destroy,
    findOne,
    bulkCreate,
  };
};

module.exports = {
  createRepository,
};
