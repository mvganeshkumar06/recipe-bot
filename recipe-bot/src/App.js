import React, { useState } from 'react';
import RecipeArray from './RecipeArray';
import './App.css';
import axios from 'axios';

require('dotenv').config();


const App =()=>{

  const key='77b19331e39a4bf2939482c7d22ebca6';
//   const key= process.env.key;
  
  const [recipes,setRecipes]=useState([]);
  
  const [validation,setValidation]=useState('');


  async function fetchData (searchValue,slideValue){
    
    const response = await axios({ 
        
        method: 'get',

        url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&number=${slideValue}&addRecipeNutrition=true&apiKey=${key}`,
    
    });


    console.log(response.data.results);

    
    setRecipes(response.data.results);

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

    if(searchValue){

        setValidation('');
        
        fetchData(searchValue,slideValue);

        document.querySelector('.btn').value='';

        document.querySelector('.slider').value=1;

    }

    else{

        setValidation(<h3 className='alert'>Enter some food item !</h3>);

    }

  }


     
  return(

    <div className='app-container'>
        
        <div>
                
            <h1 className='text'>Recipe Bot</h1>
            
            <br/><br/>
                
            <input type='text' placeholder='Enter food name ...' onChange={getSearchValue} required></input>
            
            <br/><br/><br/>
     
            <h3 className='text'>Select number of recipes (1 to 10)</h3>
            
            <br/><br/>

            <input className='slider' type='range' min='1' max='10' onChange={getSlideValue}/>
            
            <br/><br/>

            <button className='btn' onClick={sendData}>Find me Recipes</button>

            <br/> <br/>

            
            {validation}   

            <RecipeArray values={recipes}/>

        </div>

    </div>
  
    );
  


}


export default App;


