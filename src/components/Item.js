import React from 'react'
import './Item.scss'

function Item(props) {
  return (
    <li className="wrap-item">
      <label className={!props.radio ? 'wrap-label' : 'wrap-label wrap-label-radio'}>
        {props.radio && <input type="radio" name={props.name} />}
        {props.label}
        {props.span && <span>{props.span}</span>}
        {props.small && <span className="block">{props.small}</span>}
      </label>
      {props.edit && <button className="btn-delete"></button>}
    </li>
  )
}

export default Item