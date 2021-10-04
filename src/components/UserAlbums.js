import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error404 from "./Error404";
import Button from "./Button";
import PostsList from "./PostsList";
import Header from './Header'
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'
import { getUsersById } from "../service/fetchData";

const UserAlbums = () => {
  const { userId } = useParams();
  const [userAlbums, setUserAlbums] = useState([]);
  const {setHeadTitle} = useContext(HeaderContext)
  const [user, setUser] = useState({})

  // const user = usersData.find((user) => (user.id == userId))

//   console.log("user"+user);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
    async function getUserAlbumsAndUser() {
      try {
        var response = await fetch(url);
        var json = await response.json();
        console.log("useralbums" + json);
        setUserAlbums(json);

        const user = await getUsersById(userId)
        setUser(user)
      } catch (error) {
        console.log("error", error);
      }
    }

    getUserAlbumsAndUser();
  }, []);

  return (
	<div>
  {/* <Header title={`Album by: @${user.username}`}/> */}
  {setHeadTitle(`Album by: @${user.username}`)}

    <ol className="list-group list-group-numbered ">
      
      {userAlbums.map((album, index) => (
        <div key = {index} className="list-group-item list-group-item-action">
          <h4>
            <li>{album.title}</li>
          </h4>

          <Link to={`/album/${album.id}`}>
            <Button value="Explore Album" />
          </Link>
        </div>
      ))}
    </ol>
	</div>
  );
};

export default UserAlbums;
