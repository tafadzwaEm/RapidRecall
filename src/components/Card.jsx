import React from 'react'
import cover from '../img/cover.jpg'

const Card = ({card, handleChoice,flipped, disabled}) => {
    const handleClick = () => {
        if (!disabled){
            handleChoice(card)
        }
    }
  return (
    
    <div className="card">
    <div className={flipped ? "flipped" : ""}>
        <img className='front' src={card.src} alt="card front" />
        <img src={cover} 
        alt="card back" 
        onClick={handleClick} 
        className="back" />
    </div>
</div>
  )
}

export default Card
