import React, { useState } from 'react'

const PlayerName = ({getPlayerName}) => {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name){
            getPlayerName(name)
            setName('')
        }else{
            alert('Enter name or nickname to proceed')
        }
    }

  return (
    <div className='playerName'>
      <form onSubmit={handleSubmit}>
        <input type="text"
            value={name}
            placeholder='Enter Name or Nickname...'
            onChange={(e) => setName(e.target.value)}
        />
        <button type='submit' className="saveName">Start</button>
      </form>
    </div>
  )
}

export default PlayerName
