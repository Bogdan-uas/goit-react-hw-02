import './App.css'
import { useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'

function App() {
  
  const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
  
  const updateFeedback = feedbackType => {
    setFeedback(feedbackType + 1);
  }

  return (
    <>
    <h1 className='main-title'>Homework React 2</h1>
    <div className='main-container'>
    <Description />
    <Options onClick={updateFeedback} />
    <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
    />
    </div>
    </>
  )
}

export default App
