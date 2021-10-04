import API_ROUTES from "../api-routes";
import promiseMemoize from "promise-memoize";

export const getAllUsers = promiseMemoize( async () => {
  var res = await fetch(API_ROUTES.usersAll);
  var users = await res.json();
  return users;
},{resolve:"json"});

export const getUsersById = async (userId) => {
  var users = await getAllUsers();
  var singleUser = users.find((user) => user.id == userId);

  return singleUser;
};


export const getAllPosts = promiseMemoize(async () => {
  var res = await fetch(API_ROUTES.postsAll)
  var posts = await res.json()
  return posts
},{resolve:"json"})

export const getPostsById = async (postId) => {
  var posts = await getAllPosts();
  var post = posts.find((post) => post.id == postId);

  return post;
};
