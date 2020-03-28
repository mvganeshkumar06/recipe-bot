import React,{useState} from 'react';
import './Recipe.css';
import axios from 'axios';

const Recipe =(props)=>{   
    
    const {id,title,image,time,calories,protiens,carbs,fats} = props;

    const [instructions,setInstructions]=useState([]);

    const key='77b19331e39a4bf2939482c7d22ebca6';
    
    async function showIngredients(){

        const response = await axios({
                
                method: 'get',
                url: `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${key}`
        })


        if(!response.data[0]){

            console.log('No instructions found')
        
        }

         else{

            console.log(response.data[0]);

            const info=response.data[0].steps.map(item=>{
                return item.step;
            })

            setInstructions(info);
        }

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
                
                <button className='btn' onClick={showIngredients}>Get Instructions</button>
                
                <br/>
            
                {instructions} 

            </div>

        </div>

    );

}


export default Recipe;

