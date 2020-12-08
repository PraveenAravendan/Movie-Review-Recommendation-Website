import React from 'react';
import axios from 'axios';

function DropDown(props){
  let movies = ["Terminator: Dark Fate", "Terminator Genisys", "The Terminator", "Terminator Salvation", "Terminator 2: Judgment Day"]
  // const { movies1 } = props;
  let listItems = movies.map((item) => <li>{item}</li>);
  // console.log(movies1);
  console.log("from dropdown")

  let handleClick = (e) => {console.log("UL clicked")}

  return (
    <div>
      <a href={`/movie/290859`} >
        <ul style={{listStyleType:"none", 
                    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    zIndex: "1"}} 
            className="DD"
            onClick={handleClick}>
          {listItems}      
        </ul>
      </a>
    </div>
  )
}

export default DropDown;