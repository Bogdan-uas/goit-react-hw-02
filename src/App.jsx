import './App.css'
import { useState } from 'react';
import Description from './components/Description/Description.jsx';

function App() {
  
  const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
})

  return (
    <>
    <h1>Homework React 2</h1>
    <Description />
    </>
  )
}

export default App
