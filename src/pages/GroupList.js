import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addRivalAction, removeRivalAction } from '../state/actions'

const GroupList = props => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const { item } = props

  // addRivalFunc
  const addRivalFunc = e => {
    let id = Number(e.target.closest('.communities_item').id)
    if ( !user.rivals.includes(id) ) {
      dispatch(addRivalAction(id))
    } else {
      dispatch(removeRivalAction(id))
    }
  }

  return (
    <li className="communities_item" id={item.id}>
      <Link to={`/groups/${item.screen_name}`}>
        <span className="communities_item-entry">
          <img src={item.photo_50} alt="" />
          <span className="communities_item-title">{item.name}</span>
        </span>
      </Link>
      {auth && <button className={`btn-flag ${user.rivals.includes(item.id) && 'active'}`} onClick={addRivalFunc}></button>}
    </li>
  )
}

export default GroupList