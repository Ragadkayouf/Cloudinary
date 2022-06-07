import "./App.css";
import React, { useState } from "react";
import { Gallery } from "./Gallery";
import { Images } from "./Images";
import { AiFillDelete } from "react-icons/ai";

function App() {
  const [input, setInput] = useState("");

  const [tags, setTags] = useState([]);
  const [imageTags, setImageTags] = useState([
    {
      image: {
        id: "0",
        download_url: "",
      },
      tags: [],
    },
  ]);
  const [imgname, setImgname] = useState("");
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key } = e;
    const trimmedInput = input.trim();

    if (
      key === "Enter" &&
      trimmedInput.length &&
      !tags.includes(trimmedInput)
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInput]);
      setInput("");
    }
    if (key === "Backspace" && !input.length && tags.length && isKeyReleased) {
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      e.preventDefault();
      setTags(tagsCopy);
      setInput(poppedTag);
    }
    setIsKeyReleased(false);
  };
  const onKeyUp = () => {
    setIsKeyReleased(true);
  };
  const deleteTag = (index) => {
    setTags((prevState) => prevState.filter((tag, i) => i !== index));
  };
  function addTag(tag) {
    let flag = 0;
 
    {
      console.log(imgname);
      
      imageTags.map((img) => {
       
        if (img.image.id == imgname) {
          flag = 1;
         
          img.tags.push(tag);
          setImgname("");
        }
      });
    }

    if (flag == 0 && imgname != "") {
      setImageTags(() => [
        ...imageTags,
        {
          image: { id: imgname, url: "img.download_url" },
          tags: [tag],
        },
      ]);
      setImgname("");
    }

    console.log(imageTags);
    console.log(tags);
  }
  const handleImageTagsUpdate = (t) => {
    setImgname(t);
    console.log(t);
  };
  return (
    <div className="container">
    <div className="parent">
      
      <div className="selectTag">
        <h4>selected image to add tag : {imgname}</h4>

        {tags.map((tag, index) => (
          <div>
            <div
              // style={{ width: "40%", height: "10%" }}
              className="tag"
              onClick={() => addTag(tag)}
            >
              {tag}
            </div>
            <AiFillDelete onClick={() => deleteTag(index)} />
          </div>
         
        ))}

        <input
          value={input}
          placeholder="Enter a tag"
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
      </div>
      <div className="between"></div>
      
    
      <Gallery data={tags} handleUpdateTags={handleImageTagsUpdate} />
     </div>
     <div className="Tagim">
      {tags.map((tag, index) => (
        <div className="TagName">
          <h1>{tag}</h1>
          <div className={tag}>
            <Images tag={tag} imageTags={imageTags} />
          </div>
        </div>
      ))}
    </div> </div>
  );
}

export default App;
