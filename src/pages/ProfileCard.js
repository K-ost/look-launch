import React from 'react'
import { useSelector } from 'react-redux'

function ProfileCard(props) {
  const vip = useSelector(state => state.user.vip)

  return (
    <div className={`usercard ${vip && 'usercard-check'}`}>
      <div className="usercard_img">
        <img src={props.user.photo} alt="" />
      </div>
      <div className="usercard_details">
        <h2>{props.user.name}</h2>
        <div className="usercard_small">{props.user.login}</div>
      </div>
    </div>
  )
}

export default ProfileCard