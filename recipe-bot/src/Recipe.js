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

        <div className='recipe-container'>

            <div className='recipe-card'>
            
                <h3>{title}</h3>
                <br/>

                <img src={`${image}`} alt='food' width='300' height='300'/>

                <p>
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

                </p>
                

                <button className='btn' onClick={showIngredients}>Show Ingredients</button>
                <br/> <br/>

                {ingredients?'Ingredients':null}
                <br/><br/>

                {ingredients?ingredientsArray:null}

                <br/> <br/>
                
                <button className='btn' onClick={showInstructions}>Show Instructions</button>
                
                <br/> <br/>


                {instructions?'Instructions':null}
                <br/><br/>

                {instructions?instructionsArray:null}

            
            </div>

        </div>

    );

}


export default Recipe;

