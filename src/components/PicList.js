import React, {useEffect, useState} from "react";
import { useParams, Link} from "react-router-dom";

const PicList = () => {
  const { albumId } = useParams();
  const [pics, setPics] = useState([]);

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
  }, [pics]);

  return (
    <div className="wrapper wrapper-card">
      {pics.map((pic, index) => (
        <div key = {index} className="box card">
          <a href={pic.url} target="_blank" ><img  className="card-img-top" src={pic.thumbnailUrl}/></a>
          <div className="card-body">
          <p className="card-title text-center">{pic.title}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default PicList;
