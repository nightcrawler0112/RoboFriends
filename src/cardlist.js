import React from 'react';
import Card  from './card' 

const Cardlist = ({robots})=>{
    
    
  
    return (
        <React.Fragment>
          {
            robots.map((user,i) => {

                return( <Card 
                const key={i}
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email}/>);
                })
            }
        </React.Fragment>

    );
}

export default Cardlist;


