import React from 'react';
import Recipe from './Recipe';


const RecipeArray =(props)=>{

    const recipes=props.values;

    if(!recipes){
        return null;
    }

    else{

        return (
            
            recipes.map((item)=>{
            
                return (<Recipe 
                key={item.id}
                title={item.title}
                // image={item.imageUrls[0]}
                time={item.readyInMinutes}
                />)
            
            })
        
        );


    }
    
}


export default RecipeArray;
