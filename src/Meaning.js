import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      {" "}
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">Definition: {props.meaning.definition}</div>
      <br />
      <div className="example">{props.meaning.example}</div>
      <div className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
