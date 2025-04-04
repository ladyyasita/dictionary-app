import React from "react";

export default function Phonetic(props) {
  if (props.phonetics) {
    return (
      <div className="photnetic">
        <strong>Photnetic:</strong>
        {props.phonetics}
      </div>
    );
  } else {
    return null;
  }
}
