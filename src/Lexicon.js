import React, {useState } from "react";
import "./Lexicon.css";

export default function Lexicon(){
let [keyword, setKeyword] = useState("");

function search(event){
event.preventDefault();
alert(`We're searching for the definition of ${keyword}`);
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
}
    
return(
<div className="Lexicon">
<form onSubmit={search}>
    <input type="search"
    onChange={handleKeywordChange}
   />
</form>
    </div>
);
}