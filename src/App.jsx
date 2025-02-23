import './App.css'
import { useState, useEffect } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx'
import Feedback from './components/Feedback/Feedback.jsx'
import Notification from './components/Notification/Notification.jsx';

function App() {
  
  const getInitialFeedback = () => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedback, setFeedback] = useState(getInitialFeedback);
  
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  
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
  
  return (
    <>
      <div className='main-container'>
        <Description />
        <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
        
        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={totalFeedback}
            percentage={Math.round((feedback.good / totalFeedback) * 100)}
          />
        )}
      </div>
    </>
  );
  }

export default App
