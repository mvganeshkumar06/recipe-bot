import React from 'react'
import './Recipe.css'

const Recipe =(props)=>{   
    
    const {title,image,time,calories,protiens,carbs,fats} = props;
    
    return(

        <div className='recipe-container'>

            <div className='recipe-card'>
            
                <h3>{title}</h3>

                <img src={`${image}`} alt='food'/>

                <p>
                    Ready In: {time} minutes
                    <br/> <br/>
                    
                    Nutrional Information
                    <br/><br/>

                    Calories: {Math.round(calories)}
                    <br/>
                    
                    Protiens: {Math.round(protiens)}
                    <br/>
                    
                    Carbs: {Math.round(carbs)}
                    <br/>
                    
                    Fats: {Math.round(fats)}

                </p>
            
            </div>

        </div>

    );

}


export default Recipe;

