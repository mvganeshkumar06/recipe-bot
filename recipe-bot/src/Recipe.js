import React from 'react'
import './Recipe.css'
import axios from 'axios';
// import renderHTML from 'react-render-html';

const Recipe =(props)=>{   
    
    const {title,image,time,calories,protiens,carbs,fats,id} = props;
    
    var html=''

    async function showIngredients(){

        const response = await axios({
                
                method: 'get',
                url: `https://api.spoonacular.com/recipes/${id}/ingredientWidget`,

                headers: {
                    Accept: 'text/html'
                }
        })

        html = response.data;

    }

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

                    Calories: {Math.round(calories)} cal
                    <br/>
                    
                    Protiens: {Math.round(protiens)} g
                    <br/>
                    
                    Carbs: {Math.round(carbs)} g
                    <br/>
                    
                    Fats: {Math.round(fats)} g

                </p>

                <br/>
                
                <button className='btn' onClick={showIngredients}>Get Ingredients</button>
                
                <br/>

                {html}
            
            </div>

        </div>

    );

}


export default Recipe;

