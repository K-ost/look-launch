import React from 'react'
import './Sort.scss'

const Sort = props => {
  return (
    <div className="sort">
      <button
        className={`sortbtn ${props.ascDate ? 'active': ''}${props.descDate ? 'active desc' : ''}`}
        onClick={props.sortDate}
      >
        <span>По дате</span>
      </button>

      <button
        className={`sortbtn ${props.ascLikes ? 'active': ''}${props.descLikes ? 'active desc' : ''}`}
        onClick={props.sortLikes}
      >
        <span>По популярности</span>
      </button>
    </div>
  )
}

export default Sort