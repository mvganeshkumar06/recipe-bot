import React, { useState } from 'react';
import './Recipe.css';

const Recipe =(props)=>{   
    
    const {title,image,time,calories,protiens,carbs,fats,ingredientsArray,instructionsArray} = props;

    const [instructions,setInstructions]=useState(false);
    const [ingredients,setIngredients]=useState(false);

    const showInstructions =()=>{

        if(instructions){
            setInstructions(false);
        }

        else{
            setInstructions(true);
        }

    }

    const showIngredients =()=>{

        if(ingredients){
            setIngredients(false);
        }

        else{
            setIngredients(true);
        }
    }

    return(

            <div className='recipe-card'>

                <div className='recipe-grid'>
                
                    <div className='col-1'>
                        <h3 className='title'>{title}</h3>
                        <br/><br/>
                        <img src={`${image}`} alt='food' className='img'/>
                    </div>
                
                    <div className='col-2'>
                        <br/> <br/>
                        Ready In: {time} minutes
                        <br/> <br/>
                        
                        Nutrional Information
                        <br/><br/>

                        Calories: {Math.round(calories)} cal
                        <br/>
                        
                        Protiens: {Math.round(protiens)} g
                        <br/>
                        
                        Carbs: {Math.round(carbs)} g
                        <br/>
                        
                        Fats: {Math.round(fats)} g
                        <br/> <br/>

                    </div>
                    
                    <div className='col-3'>
                        <button className='btn' onClick={showIngredients}>Show Ingredients</button>
                        <br/><br/>

                        {ingredients?'Ingredients':null}
                        <br/><br/> 

                        {ingredients?ingredientsArray:null}
                    </div>
      
                    <div className='col-4'>
                        <button className='btn' onClick={showInstructions}>Show Instructions</button>  
                        <br/><br/>            

                        {instructions?'Instructions':null}
                        <br/><br/> 

                        {instructions?instructionsArray:null}
                    </div>

                </div>
            
            </div>

    );

}


export default Recipe;

