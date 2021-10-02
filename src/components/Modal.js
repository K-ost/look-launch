import React from 'react'
import './Modal.scss'

const Modal = props => {

  // closePopup
  const closePopup = e => {
    e.target.closest('.modal').classList.remove('opened')
  }

  // modalClose
  const modalClose = () => {
    let modals = document.querySelectorAll('.modal')
    for (let i of modals) {
      i.classList.remove('opened')
    }
  }

  return (
    <div className="modal" id={props.id}>
      <div className="modal_wrapper">
        <div id="modal_overlay" onClick={modalClose} onTouchStart={modalClose}></div>
        <div className="modal_inner">
          {props.title && <h2>{props.title}</h2>}
          {props.children}
          {props.cancel && <button className="btn btn-link" onClick={closePopup}>Отменить</button>}
          <button className="modal-close" onClick={closePopup}></button>
        </div>
      </div>
    </div>
  )
}

export default Modal