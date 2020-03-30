import React, { useState } from 'react';
import RecipeArray from './RecipeArray';
import './App.css';
import github from './Assets/github.jpg';
import linkedin from './Assets/linkedin.png';
import twitter from './Assets/twitter.png';
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
        
        <div className='app'>
                
            <h1 className='text mainhead'>Recipe Bot</h1>
            
            <br/><br/>
                
            <input type='text' className='search' placeholder='Enter food name ...' onChange={getSearchValue} required ></input>

     
            <h3 className='text sliderhead'>Select number of recipes (1 to 10)</h3>

            <input className='slider' type='range' min='1' max='10' onChange={getSlideValue}/>

            <br/>

            <button className='btn' onClick={sendData}>Find me Recipes</button>

            <button className='btn' type='reset' onClick={resetData}>Reset Values</button>

            <br/> <br/>      
            
            <a href='https://spoonacular.com/food-api
            ' target='_blank' rel='noopener noreferrer' className='attribution'> 
            
            POWERED BY SPOONACULAR API
            
            </a>
            
            <br/> <br/>
          
            
            {validation}   

            <RecipeArray values={recipes}/>

        </div>

        <div className='text infocard'>
        
                <h3 className='text note'>Note</h3>

                Make sure you reset both the input field and slider before you search for recipes !

        </div>

        <div className='text devcard'>
        
                <h3 className='text note'>Developed by Ganesh Kumar</h3>
                
                <div className='connect'>
                        <h3> You can find me on </h3>
                        
                        <a href='https://github.com/Ganesh-Kumar6' >
                            
                            <img src={github} alt='github'  className='icons' target='_blank' rel='noopener noreferer'/>
                        
                        </a> 
                        
                        <a href='https://www.linkedin.com/in/ganesh-kumar-700a26191/' >
                            
                            <img src={linkedin} alt='linkedin'  className='icons' target='_blank' rel='noopener noreferer'/>
                        
                        </a>
                        
                        <a href='https://twitter.com/Gannyv06' >
                        
                            <img src={twitter} alt='twitter' className='icons' target='_blank' rel='noopener noreferer'/>
                        
                        </a>
                </div>

        </div>

    </div>
  
    );
  


}


export default App;


