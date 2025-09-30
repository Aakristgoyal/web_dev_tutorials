import React from 'react'
import { useState , useEffect} from 'react';
import './Card.css'
const Card = (props) => {
    return (
        <div className='card'>
            <div className="id">
                <p>UserId:{props.userId}</p>
                <p>Id:{props.id}</p>
            </div>
            <h2>Title : {props.title}</h2>
            <p>{props.body}</p>
            <button className="btn">Open Now</button>
        </div>
    )
}

export default Card
