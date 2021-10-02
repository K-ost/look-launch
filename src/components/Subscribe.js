import React from 'react'
import logo3 from '../assets/images/logo3.png'

function Subscribe(props) {
  return (
    <div className="subscribe">
      <div className="subscribe_img"><img src={logo3} alt="" /></div>
      <div className="subscribe_details">
        <h3>Подпишитесь на нас</h3>
        <p>TargetHunter — cервис поиска целевой аудитории в соцсетях</p>
        <a href="https://google.ru/" target="_blank" rel="noreferrer" className="btn btn-sm btn-to"><span>Перейти</span></a>
      </div>
    </div>
  )
}

export default Subscribe