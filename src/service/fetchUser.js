import API_ROUTES from "../api-routes";
import promiseMemoize from "promise-memoize";

export const getAllUsers = promiseMemoize( async () => {
  var res = await fetch(API_ROUTES.usersAll);
  var users = await res.json();
  return users;
},{resolve:"json"});

export const getUsersById = async (id) => {
  var users = await getAllUsers();
  var singleUser = users.find((user) => user.id == id);

  return singleUser;
};
