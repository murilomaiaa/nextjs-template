import { useState } from "react"
import { Title } from "../styles/pages/Home"

export default function Home() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <Title>Hello World</Title>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </div>
  )
}