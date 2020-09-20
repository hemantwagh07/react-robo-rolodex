import React from 'react';
import './card.css'

export const Card = props => {
    return <div className='card-container'>
        <img alt={props.monster.username} src={`https://robohash.org/${props.monster.username}.png?size=180x180`} />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
}