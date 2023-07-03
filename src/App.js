import Header from "./components/Header"
import { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AboutPage from "./pages/AboutPage"


const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete that item?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  
  return (
    <Router>
      <Header />
      <div className="container">
      <Routes>
          <Route exact path='/' element={
            
            <>

            <FeedbackForm feedback={feedback} />
            <FeedbackStats feedback={feedback} />
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
            </>
        }>
        </Route>
        <Route path='/about' element={<AboutPage />} />
      </Routes>
          </div>
    </Router>
  )
}

export default App
