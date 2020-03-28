import React from 'react';
import Recipe from './Recipe';
import './RecipeArray.css'

const RecipeArray =(props)=>{

    const recipes=props.values;

    if(!recipes){
        return null;
    }

    else{
        
        var RecipeArray= recipes.map((item)=>{
            
            return <Recipe 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                time={item.readyInMinutes}
                calories={item.nutrition.nutrients[0].amount}
                protiens={item.nutrition.nutrients[8].amount}
                carbs={item.nutrition.nutrients[3].amount}
                fats={item.nutrition.nutrients[1].amount}

                />
            
            })
    }

    return(
        <div className='list'>
            {RecipeArray}
        </div>
    );
    
}


export default RecipeArray;
