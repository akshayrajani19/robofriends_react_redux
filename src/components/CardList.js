import React from 'react';

import Card from './Card'

const CardList = ({robots})=>{
    const CardList = robots.map((item) =>{
        return (<Card key = {item.id} 
                      id = {item.id} 
                      name = {item.name} 
                      email = {item.email} 
                      username ={item.username}/>)
    });

    return (
        <div>
            {CardList}
        </div>
    )
}


export default CardList;
