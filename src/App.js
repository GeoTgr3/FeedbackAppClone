import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';
import AboutPage from './pages/AboutPage';
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
  return (

    <FeedbackProvider>

    <Router>
      <Header text="feedback App" />
      <div className="container">
        <Routes>
          <Route exact path="/" element={

            <>

              <FeedbackForm  />
              <FeedbackStats  />
              <FeedbackList    />
              
            </>
  
          } />

          <Route path='/about' component={<AboutPage />} />
        </Routes>
        <AboutIconLink />

      </div>
    </Router>
    </FeedbackProvider>

  );
}

export default App;
