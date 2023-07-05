import React from 'react';


const Card = ({id,name,username,email}) =>{
    return (
        <div className='tc bg-light-blue dib br3 pa2 ma2 shadow-5 grow bw2'>
            <img alt='robots'src={`https://robohash.org/${id}`}/>
            <React.Fragment>
                <h2>{name}</h2>
                <p>{email}</p>
            </React.Fragment>
        </div>

    );
}

export default Card;
