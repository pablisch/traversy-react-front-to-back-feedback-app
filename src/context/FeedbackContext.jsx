import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react'

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

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })
  
  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete that item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // update feedback itrm
  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }
  
  return <FeedbackContext.Provider value={{
    feedback: feedback,
    feedbackEdit: feedbackEdit,
    deleteFeedback: deleteFeedback,
    addFeedback: addFeedback,
    editFeedback: editFeedback,
    updateFeedback: updateFeedback
  }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext