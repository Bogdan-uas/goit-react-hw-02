import './App.css'
import { useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx';

function App() {

  const [feedback, setFeedback] = useState({
	good: 0,
	neutral: 0,
	bad: 0
  })
  
  const updateFeedback = (feedbackType) => {
    setFeedback((getFeedback) => ({
      ...getFeedback,
      [feedbackType]: (getFeedback[feedbackType] || 0) + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  
  if (totalFeedback === 0) {
    return (
    <>
    <h1 className='main-title'>Homework React 2</h1>
    <div className='main-container'>
    <Description />
        <Options updateFeedback={updateFeedback} />
      <Notification />
    </div>
    </>
  )
  } else {
    return (
    <>
    <h1 className='main-title'>Homework React 2</h1>
    <div className='main-container'>
    <Description />
        <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
        <Feedback
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
    />
    </div>
    </>
  )
  }
}

export default App
