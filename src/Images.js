import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import './Images.css'

export function Images(props) {
  let TheTag = props.tag;
  let imageTags = props.imageTags;
  const [tags, setTags] = useState(imageTags);
  function removeTag(id, tag) {
    {
      imageTags.map((img) => {
        if (img.image.id == id) {
          //  img.tags.remove(tag);
          var index = img.tags.indexOf(tag);
          if (index !== -1) {
            img.tags.splice(index, 1);
            setTags(img.tags);
          }
        }
      });
    }
  }
  return (
    <div>
      {imageTags.map((img) => {
        if (img.tags.includes(TheTag)) {
          return (
      
            <div className="TagedImage">
              <img src={img.image.id} />
              <AiFillDelete onClick={() => removeTag(img.image.id, TheTag)} />
            </div>
          );
        }
      })}
    </div>
  );
}
