import React from 'react';
import Card from './Card';
import './List.css';


function List(props) {
  
    return(
        
    <section className="List">
        <header className="List-header">
          <h2>{props.list.header}</h2>
        </header>
        <div className="List-cards">
            {props.list.cardIds.map(card =>{
              
                return(
                    <Card id= {card.id} card={card} allCards={props.allCards}
                    onClickDelete={props.onClickDelete}/>
                    
                )
            })}
        
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.onClickRandomCard(props.id)}
        >
          + Add Random Card
        </button>
            
        </div>
        
    </section>
    )

}



export default List;