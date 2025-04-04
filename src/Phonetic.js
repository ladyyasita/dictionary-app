import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="photnetic">
        <strong>Phonetic:</strong>
        {props.phonetic}
      </div>
    );
  } else {
    return null;
  }
}
