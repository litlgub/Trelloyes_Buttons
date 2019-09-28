import React from 'react';
import './Card.css';


function Card(props) {
  console.log(props)
  
    let key= props.card
    return(
        <div className="Card">
        <button type="button" onClick={() => props.onClickDelete(props.card)}>delete</button>
        <h3>{props.allCards[props.card].title}</h3>
        <p>{props.allCards[props.card].content}</p>
      </div>
    )

}



export default Card;