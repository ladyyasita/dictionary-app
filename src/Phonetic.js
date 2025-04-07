import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="photnetic">
        <strong>Phonetic:</strong>
       <div className="text">{props.phonetic}</div> 
      </div>
    );
  } else {
    return null;
  }
}
