import React, {useEffect, useState} from "react";
import { useParams, Link} from "react-router-dom";
import Modal from "./Modal";
import { useContext } from 'react'
import { HeaderContext } from '../helpers/HeaderContext'

const PicList = () => {
  const { albumId } = useParams();
  const [pics, setPics] = useState([]);
  const {setHeadTitle} = useContext(HeaderContext)

  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`;
    
    async function getPics() {
      try {
        var response = await fetch(url);
        var json = await response.json();
        console.log("Pics" + json);

        setPics(json);

      } catch (error) {
        console.log("error", error);
      }
    }

    getPics();
  }, []);

  return (
    <>
    {/* <Header title="Photos in Album"/> */}
    {setHeadTitle("Photos in Album")}

    <div className="wrapper wrapper-card">
      {pics.map((pic, index) => (
        <div key = {index} className="box card">
          <Modal pic = {pic}/>
          <div className="card-body">
          <p className="card-title text-center">{pic.title}</p>
          </div>
          
        </div>
      ))}
    </div>
    </>
  );
};

export default PicList;
