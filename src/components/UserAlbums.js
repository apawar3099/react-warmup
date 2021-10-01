import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Error404 from "./Error404";
import Button from "./Button";
import PostsList from "./PostsList";
import Header from './Header'
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'

const UserAlbums = ({usersData}) => {
  const { userId } = useParams();
  const [userAlbums, setUserAlbums] = useState([]);
  const {setHeadTitle} = useContext(HeaderContext)

  const user = usersData.find((user) => (user.id == userId))
//   console.log("user"+user);

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}/albums`;
    async function getUserAlbums() {
      try {
        var response = await fetch(url);
        var json = await response.json();
        console.log("useralbums" + json);

        setUserAlbums(json);
      } catch (error) {
        console.log("error", error);
      }
    }

    getUserAlbums();
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
