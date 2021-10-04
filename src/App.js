import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, {useEffect, useState} from "react";
import UsersList from "./components/UsersList";
import Homepage from "./components/Homepage";
import User from './components/User'
import UserPosts from "./components/UserPosts"
import UserAlbums from "./components/UserAlbums"
import "./App.css";
import PostPage from "./components/PostPage";
import PicList from "./components/PicList";
import { getAllUsers } from "./service/fetchData";
import {HeaderContext} from "./helpers/HeaderContext"
import Header from "./components/Header";


// function getUsersData(){
// return fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
  
// }

function App() {
	
	const [usersData, setUsersData] = useState([]);
	const [headTitle, setHeadTitle] = useState("");

	useEffect(() => {

		async function getData() {
			try {

			var jsonUsers = await getAllUsers();
			console.log("users" + jsonUsers);
			setUsersData(jsonUsers)

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
		<Header title={headTitle}/>

		<Router>
			<HeaderContext.Provider value={{headTitle, setHeadTitle}}>
				<Route exact path="/" component={Homepage}></Route>
				<Route path="/users" ><UsersList usersData= {usersData} /></Route>
				<Route path="/user/:id" ><User /></Route>
				<Route path="/posts/:userId" ><UserPosts /></Route>
				<Route path="/albums/:userId" ><UserAlbums  /></Route>
				<Route path="/post/:postId" ><PostPage /></Route>
				<Route path="/album/:albumId" ><PicList /></Route>
			</HeaderContext.Provider>

		</Router>
    	
     
    </>
  );
}

export default App;
