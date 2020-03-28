import React from 'react'


const Recipe =(props)=>{   
    
    const {title,time} = props;
    
    return(

        <div>
        
          <h1>{title}</h1>

          {/* <img src={`${image}`} alt='food'/> */}

          <h3>{time}</h3>
        
        </div>

    );

}


export default Recipe;

