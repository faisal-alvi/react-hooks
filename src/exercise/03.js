// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  )
}

function FavoriteAnimal({animal, onNameChange}) {
  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input id="animal" value={animal} onChange={onNameChange} />
    </div>
  )
}

function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

function App() {
  const [animal, setAnimalName] = React.useState('')
  return (
    <form>
      <Name />
      <FavoriteAnimal
        animal={animal}
        onNameChange={event => setAnimalName(event.target.value)}
      />
      <Display animal={animal} />
    </form>
  )
}

export default App
