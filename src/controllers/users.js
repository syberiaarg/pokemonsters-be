import UserService from "../services/users";

const fetch = async (req, res, next) => {
  try {
    const result = await UserService.fetchUsers();
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await UserService.createUser(req.body);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

const fetchOne = async (req, res, next) => {
  try {
    const result = await UserService.fetchUser(req.params.id);
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export default { fetch, fetchOne, create };
