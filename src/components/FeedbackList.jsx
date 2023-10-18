import React from 'react';
import FeedbackItem from './FeedbackItem';
import { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {


  const {feedback  } =useContext(FeedbackContext)


  if (!feedback || !Array.isArray(feedback) || feedback.length === 0) {
    return <p>No feedback yet</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} 
         />
      ))}
    </div>
  );
}
// FeedbackList.propTypes={
//     feedback: propTypes.arrayOf(
//         propTypes.shape({
//             id: propTypes.number.isRequired,
//             text: propTypes.string.isRequired,
//             rating: propTypes.number.isRequired,
//         })
//     )
// }
export default FeedbackList;
