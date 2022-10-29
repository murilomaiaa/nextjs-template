import { useState } from 'react'

const Home = (): JSX.Element => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>Hello World</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}

export default Home
