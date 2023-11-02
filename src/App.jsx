import {useState} from "react";
import React from "react";

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

export default function App() {
    var x = ["Willy the Goblin","big Daddy","Father Christmas"];
    var y = ["the soup kitchen","Disneyland","the White House"]
    var z = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];
    const [showStory,setShowStory] = useState(false);
    const [name,setName] = useState("Bob");
    const [xItem,setxItem] = useState("");
    const [yItem,setyItem] = useState("");
    const [zItem,setzItem] = useState("");
    const [ukus,setukus] = useState("us");
    const [judgeUkus,setjudgeUkus] = useState(true);

    function nameChanged(event){
      event.preventDefault();
      const inputName = event.target.elements.inputName;
      const newName = String(inputName.value)
      setName([newName]);
      event.placeholder = "name";
    }

    function handleClick(){
        setxItem(randomValueFromArray(x));
        setyItem(randomValueFromArray(y));
        setzItem(randomValueFromArray(z));
        setShowStory(true);
        if(ukus === "us"){
          setjudgeUkus(true);
        }else{
          setjudgeUkus(false);
        }
    }

    function usChange(){
      const us = "us";
      setukus(us);
    }
    function ukChange(){
      const uk = "uk";
      setukus(uk);
    }
    return (
      <>
        <div class = "form">
          <form onSubmit = {nameChanged}>
            <label htmlFor="customname">Enter custom name:</label>
            <input type="text" placeholder="" required name = "inputName" class = "inputName"/>
            <imput type = "submit" value = "Submit name" class = "nameSubmit"/>
          </form>
        </div>
        <div>
            <label htmlFor="us">US</label>
            <input type="radio" value="us" checked={ukus === "us"} onClick = {usChange}/>
            <label htmlFor="uk">UK</label>
            <input type="radio" value="uk"checked={ukus === "uk"} onClick = {ukChange}/>
        </div>
        <div>
          <button onClick = {handleClick}>Generate random story</button>
        </div>
        {showStory && judgeUkus &&(
          <p>
            It was 94 fahrenheit outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs 300
            pounds, and it was a hot day.
          </p>
        )}
        {showStory && !judgeUkus &&(
          <p>
            It was 94 centigrade outside, so {xItem} went for a walk. When they
            got to {yItem}, they stared in horror for a few moments, then {zItem}.
            {name} saw the whole thing, but was not surprised — {xItem} weighs 300
            stones, and it was a hot day.
          </p>
        )}
      </>
    );
  }