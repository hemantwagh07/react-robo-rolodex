import React from 'react';
import './card.css'

export const Card = props => (
    <div className='card-container'>
        <img alt={props.robot.username} src={`https://robohash.org/${props.robot.username}.png?size=180x180`} />
        <h2>{props.robot.name}</h2>
        <p>{props.robot.email}</p>
    </div>
)