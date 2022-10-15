// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function useLocalStorageState(key, defaultValue = '') {
  const [name, setName] = React.useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  React.useEffect(() => {
    window.localStorage.setItem(key, name)
  }, [key, name])

  return [name, setName]
}

function Greeting({initialName = '', initialSurName = ''}) {
  const [name, setName] = useLocalStorageState('name', initialName)
  const [surname, setSurName] = useLocalStorageState('surname', initialSurName)

  function handleChange(event) {
    const newName = event.target.value
    window.localStorage.setItem('name', newName)
    setName(newName)
  }

  function handleSurnameChange(event) {
    const newName = event.target.value
    window.localStorage.setItem('surname', newName)
    setSurName(newName)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
        <input value={surname} onChange={handleSurnameChange} id="name" />
      </form>
      {name ? (
        <strong>
          Hello {name} {surname}
        </strong>
      ) : (
        'Please type your name'
      )}
    </div>
  )
}

function App() {
  return <Greeting initialName="Faisal" initialSurName="Alvi" />
}

export default App
