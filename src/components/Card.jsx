import React from 'react'

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
        <img src="/img/cover.jpg" 
        alt="card back" 
        onClick={handleClick} 
        className="back" />
    </div>
</div>
  )
}

export default Card
