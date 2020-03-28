import React, { useState } from 'react';
import RecipeArray from './RecipeArray';
import './App.css';
import axios from 'axios';

require('dotenv').config();


const App =()=>{
  
  const key= process.env.REACT_APP_KEY;
  
  const [recipes,setRecipes]=useState([]);
  
  const [validation,setValidation]=useState('');


  async function fetchData (searchValue,slideValue){
    
    const response = await axios({ 
        
        method: 'get',

        url: `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&number=${slideValue}&instructionsRequired=true&addRecipeNutrition=true&apiKey=${key}`,
    
    });



    if(response.data.results.length===0 || !response.data.results){
    
      setValidation(<h3 className='alert'>Sorry no food item found !  Try something else  :)</h3>);
    
    }
    
    else{

      //setValidation('');
      console.log(response.data.results);
      setRecipes(response.data.results);
    
    }
    

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

    }

    else{

        setValidation(<h3 className='alert'>Enter some food item !</h3>);

    }

  }

  const resetData=()=>{
        
    document.querySelector('.search').value='';

    document.querySelector('.slider').value=1;

    setValidation('');

  }


     
  return(

    <div className='app-container'>
        
        <div>
                
            <h1 className='text'>Recipe Bot</h1>
            
            <br/><br/>
                
            <input className='search' type='text' placeholder='Enter food name ...' onChange={getSearchValue} required ></input>
            
            <br/><br/><br/>
     
            <h3 className='text'>Select number of recipes (1 to 10)</h3>
            
            <br/><br/>

            <input className='slider' type='range' min='1' max='10' onChange={getSlideValue}/>
            
            <br/><br/>

            <button className='btn' onClick={sendData}>Find me Recipes</button>

            <br/> <br/>

            <button className='btn' type='reset' onClick={resetData}>Reset Values</button>

            <br/> <br/>

            
            {validation}   

            <RecipeArray values={recipes}/>

        </div>

    </div>
  
    );
  


}


export default App;


