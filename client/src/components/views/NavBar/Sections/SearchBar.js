import React from 'react';
import DropDown from './DropDown';

const SearchBar = ({keyword,setKeyword}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem",
  display: "block", marginTop: "1em", marginBottom: "1em", marginLeft: "0", marginRight: "0", paddingLeft: "40px"};

  let suggestions = [];
  let display_suggestions = [];
  let listItems;
  let baseURL = 'https://api.themoviedb.org/3/';
  let configData = null;
  let baseImageURL = null;

  const [showResults, setShowResults] = React.useState(false);
    
  let getConfig = function (keyword) {
      let url = "".concat(baseURL, 'configuration?api_key=', '844dba0bfd8f3a4f3799f6130ef9e335'); 
      fetch(url)
      .then((result)=>{
          return result.json();
      })
      .then((data)=>{
          baseImageURL = data.images.secure_base_url;
          configData = data.images;
          console.log('config:', data);
          console.log('config fetched');
          runSearch(keyword)
      })
      .catch(function(err){
          alert(err);
      });
  }
  
  let runSearch = function (keyword) {
      if(keyword==null){
        // setShowResults(false);
        return;
      }
      let url = ''.concat(baseURL, 'search/movie?api_key=', '844dba0bfd8f3a4f3799f6130ef9e335', '&query=', keyword);
      suggestions = [];
      display_suggestions = [];
      fetch(url)
      .then(result=>result.json())
      .then((data)=>{
          //process the returned data
          suggestions = data.results.map(function(result){
            return result.original_title;
          });
          display_suggestions = suggestions.slice(0,5);
          console.log(display_suggestions);
          console.log("From searchbar");
          //work with results array...          
          setShowResults(true);
      })
  }

  return (
    <div>
      <input 
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search"}
      onChange={(e) => getConfig(e.target.value)}
      />  

    { showResults ? <DropDown movies={"rapido"}/> : null }
    
    </div>

  );
}

export default SearchBar