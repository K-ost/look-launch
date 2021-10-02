import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import groupsJSON from '../data/groups.json'
import { removeRivalAction } from '../state/actions'

const Concurents = props => {
  const auth = useSelector(state => state.auth)
  const rivals = useSelector(state => state.user.rivals)
  const rivalsGroups = groupsJSON.filter(item => rivals.includes(item.id))
  const dispatch = useDispatch()

  // User not logged
  if ( auth === false ) {
    props.history.push('/')
  }

  // editRivalsListFunc
  const [editRivalsList,setEditRivalsList] = useState(false)
  const editRivalsListFunc = () => {
    if (!editRivalsList) {
      setEditRivalsList(true)
    } else {
      setEditRivalsList(false)
    }
  }

  // removeRivalPopupFunc
  const [title,setTitle] = useState('')
  const [rivalId,setRivalId] = useState('')
  const removeRivalPopupFunc = e => {
    setTitle(e.target.closest('.communities_item').children[0].children[0].children[1].textContent)
    setRivalId(Number(e.target.closest('.communities_item').id))
    document.querySelector('#removeRival').classList.add('opened')
  }

  // removeRivalFunc
  const removeRivalFunc = e => {
    dispatch(removeRivalAction(rivalId))
    document.querySelector('#removeRival').classList.remove('opened')
  }


  return (
    <>
      <div className="pagetitle">
        <h1>Список конкурентов</h1>
        <button className={editRivalsList ? 'btn-save': 'btn-edit'} onClick={editRivalsListFunc}></button>
      </div>
      <div className="wrap wrap-big">
        <ul className="communities_list">
          {rivalsGroups.length ? 
            rivalsGroups.map(item => {
              return (
                <li className="communities_item" key={item.id} id={item.id}>
                  <Link to={`/groups/${item.screen_name}`}>
                    <span className="communities_item-entry">
                      <img src={item.photo_50} alt="" />
                      <span className="communities_item-title">{item.name}</span>
                    </span>
                  </Link>
                  {editRivalsList && <button className="btn-delete" onClick={removeRivalPopupFunc}></button>}
                </li>
              )
            }) :
            <div className="wrap_inner">
              <div className="alert">Список конкурентов пуст</div>
            </div>}
        </ul>
      </div>

      <Modal id="removeRival" cancel={true}>
        <p>Удалить из списка группу<br /> {title}</p>
        <button className="btn btn-block" onClick={removeRivalFunc}>Удалить</button>
      </Modal>
    </>
  )
}

export default Concurents