import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
    id: '1',
    rating: 8,
    text: 'I am feedback message number 1',
  },
  {
    id: '2',
    rating: 7,
    text: "I am feedback message number 2. I'm a bit longer.",
  },
  {
    id: '3',
    rating: 4,
    text: "I am feedback message number 3. I am considerably longer than the first two.",
  },
  ])
  
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete that item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  
  return <FeedbackContext.Provider value={{
    feedback: feedback,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext