import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UsersList from "./components/UsersList";
import Homepage from "./components/Homepage";
import User from './components/User'
import UserPosts from "./components/UserPosts"
import UserAlbums from "./components/UserAlbums"
import "./App.css";
import jsonuserdata from "./jsonuserdata.json";
import PostPage from "./components/PostPage";
import PicList from "./components/PicList";
import { getAllUsers } from "./service/fetchUser";

// function getUsersData(){
// return fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  
// }

function App() {
	
	const [usersData, setUsersData] = useState([]);
	const [postsData, setPostsData] = useState([]);

	useEffect(() => {

		const urlUsers = "https://jsonplaceholder.typicode.com/users";
		const urlPosts = "https://jsonplaceholder.typicode.com/posts";

		async function getData() {
			try {
			// var resUsers = await fetch(urlUsers) ;
			var resPosts = await fetch(urlPosts) ;

			var jsonUsers = await getAllUsers();
			var jsonPosts = await resPosts.json();

			console.log("users" + jsonUsers);
			setUsersData(jsonUsers)

			console.log("posts" + jsonPosts);
			setPostsData(jsonPosts)

			}catch (error) {
                console.log("error", error);
            }
		};

		getData();

	},[])
	

  return (
    <>
      	<div className="App bg-dark">
        	<a  href="/"><h2 className= "heading-home" >Home</h2></a>
			<h1 className= "heading-title">ReactJS Warmup</h1>
      	</div>

		<Router>
			<Route exact path="/" component={Homepage}></Route>
			<Route path="/users" ><UsersList usersData= {usersData} /></Route>
			<Route path="/user/:id" ><User usersData= {usersData} /></Route>
			<Route path="/posts/:userId" ><UserPosts usersData= {usersData}/></Route>
			<Route path="/albums/:userId" ><UserAlbums usersData= {usersData} /></Route>
			<Route path="/post/:postId" ><PostPage posts = {postsData} usersData = {usersData}/></Route>
			<Route path="/album/:albumId" ><PicList /></Route>


		</Router>
    	
     
    </>
  );
}

export default App;
