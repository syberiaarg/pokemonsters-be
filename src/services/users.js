import { db } from "../helpers/database";

const fetchUsers = async () => {
  const data = await db.select().table('users')
  return data;
};

const createUser = async (user) => {

  const repeated = await db.select().table('users').where('email', user.email).first()

  if (repeated) { throw { status: 400, message: 'User already exist' } }

  return await db.table('users').insert(user)
};

const fetchUser = async () => {
  return "fetchOne";
};

export default { fetchUsers, fetchUser, createUser };
