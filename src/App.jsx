import { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Card';
import PlayerName from './components/PlayerName';

import helmet from'./img/helmet-1.JPG'
import portion from './img/potion.jpg'
import ring from './img/ring.jpg'
import scroll from './img/scroll.jpg'
import shield from './img/shield.jpg'
import sword from './img/sword.jpg'


const cardImages = [
  {'src':helmet, matched: false},
  {'src':portion, matched: false},
  {'src':ring, matched: false},
  {'src':scroll, matched: false},
  {'src':shield, matched: false},
  {'src':sword, matched: false},
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState('')
  const [choiceTwo, setChoiceTwo] = useState('')
  const [disabled, setDisabled] = useState(false)
  const [plname, setPname] = useState(null)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
     .sort(() => Math.random() - 0.5) // ADD - 0.5 LATER
     .map((image) => ({...image, id: Math.random()}))

     setCards(shuffledCards)
     setTurns(0)
     setChoiceOne('')
     setChoiceTwo('')
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const reset = () => {
    setChoiceOne('')
    setChoiceTwo('')
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }
  
  useEffect(()=>{
    if (choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src){
              return {...card, matched: true}
            }else{
              return card
            }
          })
        })
        reset()
      }else{
        console.log('Different Cards')
        setTimeout(() => reset(), 1000)
      }
    } 
  },[choiceOne,choiceTwo])

  // start the game automatically
  useEffect(()=>{
    shuffleCards()
  },[])

  const getPlayerName = (pname) => {
    setPname(pname)
  }
  return (
    <div className="App">
      <h3>RapidRecall</h3>
      <button onClick={shuffleCards} className="btn">Restart Game</button>

      { plname ?       
      <>
      <p className='pplayer'>Player: {plname}</p>
        <div className="cards-grid">
          { cards.map((card) => {
            return (
              <Card card={card} key={card.id}
              handleChoice={handleChoice}
              disabled={disabled}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              />
            )
          }) }
        </div>
        <p>Attempts: {turns}</p>
        
      </>
      : <PlayerName getPlayerName={getPlayerName}/>

    }
    </div>
  );
}

export default App;
