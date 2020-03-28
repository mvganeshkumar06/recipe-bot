import React, { useState } from 'react';
import RecipeArray from './RecipeArray';


require('dotenv').config();


const App =()=>{


  const key='77b19331e39a4bf2939482c7d22ebca6';
  
  const [recipes,setRecipes]=useState([]);
  
  
  async function fetchData (searchValue,slideValue){
    
    const resp = await fetch(`https://api.spoonacular.com/recipes/search?query=${searchValue}&number=${slideValue}&apiKey=${key}`);


    const data = await resp.json();


    console.log(data.results);


    setRecipes(data.results);


  }


  var searchValue = '';
  var slideValue = 0;


  const getSearchValue=(event)=>{
    searchValue=event.target.value;
  }


  const getSlideValue=(event)=>{
    slideValue=event.target.value;
  }


  const sendData=()=>{
    fetchData(searchValue,slideValue);
  }


     
  return(
  
    <div>
        <div>
            
          <h1> Powered by Spoonacular API </h1>
          <input type='text' onChange={getSearchValue}/>
          <br/>
          <input type='range' min='1' max='10' onChange={getSlideValue}/>
          <br/> <br/>
          <button onClick={sendData}>Search</button>


        </div>
        
        <div>
          
          <RecipeArray values={recipes}/>


        </div>


    </div>
  
    );
  


}


export default App;


