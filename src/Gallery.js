import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Gallery.css";
import { BsFillTagFill } from "react-icons/bs";

export function Gallery(props) {
  let TheTags = props.data;
  let [Images, setImages] = useState([{ download_url: "" }]);

  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?limit=6")
      .then(async (response) => {
        setImages(response.data);
      });
  }, []);
  function ShowTags(Tags, download_url) {
    props.handleUpdateTags(download_url);

    console.log(download_url);
    const listItems = Tags.map((Tags) => <li>{Tags}</li>);
    console.log(listItems);
  }
  const Card = ({ download_url }) => {
    return (
      <div className="Gallery">
        <img src={download_url} alt="" />
        <BsFillTagFill onClick={() => ShowTags(TheTags, download_url)} />
      </div>
    );
  };

  return (
    
    <div className="Card">
      {Images.map((curr, i) => {
        return <Card key={i} {...curr}></Card>;
      })}
    </div>
  );
}
