import React from 'react'
function Card({children , reverse}) {
  return (
    <div className="card" style={{background : reverse ? 'rgba(0,0,0,0.4)' :'#fff',
    color: reverse ? '#fff' : '#000', 
    }}> 
      {children}
    </div>
  )
}
Card.defaultProps={
    reverse: false, 
  }
// Card.propTypes={
//     children: PropTypes.node.isRequired,
//     reverse: PropTypes.bool,
//   }
export default Card
