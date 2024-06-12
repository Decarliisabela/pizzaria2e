import {useState} from 'react'
import {Routes, Route} from 'react-router-dom'

const App = () => {

  const [color] = useState ("#ff0000")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path = "/" />
    </Routes>
  )
}

export default App