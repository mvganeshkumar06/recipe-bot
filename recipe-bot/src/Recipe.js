import React from 'react';
import './Recipe.css';

const Recipe =(props)=>{   
    
    const {title,image,time,calories,protiens,carbs,fats,ingredientsArray,instructionsArray} = props;

    return(

        <div className='recipe-container'>

            <div className='recipe-card'>
            
                <h3>{title}</h3>
                <br/>

                <img src={`${image}`} alt='food' width='300' height='300'/>

                <p>
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
                

                <div className='ingredients'>

                    Ingredients
                    <br/><br/>

                    {ingredientsArray}

                </div>

                <br/>
                
                <button className='btn'>Get Instructions</button>
                
                <br/> <br/>
            
                <div className='instructions'>

                    Instructions
                    <br/><br/>

                    {instructionsArray}
            
                </div>
            
            </div>

        </div>

    );

}


export default Recipe;

