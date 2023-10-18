import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {

    //calculate rating averge
    const {feedback} =useContext(FeedbackContext)

    let averge =feedback.reduce((acc ,cur)=>{
        return acc+ cur.rating
    },0) / feedback.length

    averge =averge.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-state'>
        <h4>{feedback.length} Review </h4>
        <h4>Averge Rating : {isNaN({averge})? 0 :averge}</h4>
      
    </div>
  )
}

export default FeedbackStats
