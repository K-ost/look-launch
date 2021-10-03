import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../state/actions'
import photo from '../assets/images/photo.png'

const HeaderNav = props => {

  const isRivals = useSelector(state => state.user.rivals)

  // signoutFunc
  const dispatch = useDispatch()
  const signoutFunc = e => {
    dispatch(signin(false))
    document.querySelector('.btn-bars').classList.remove('active')
    document.querySelector('#headernav').classList.remove('opened')
  }

  // closeNav
  const closeNav = () => {
    document.querySelector('.btn-bars').classList.remove('active')
    document.querySelector('#headernav').classList.remove('opened')
  }
  const navOverFunc = () => {
    document.querySelector('.btn-bars').classList.remove('active')
    document.querySelector('#headernav').classList.remove('opened')
  }



  return (
    <>
      <div id="headernav">
        <div className="headernav_inner">
          <ul>
            <li>
              <Link to="/profile" className="headernav_img" onClick={closeNav}>
                <img src={photo} alt="" /> Александр Никифоров
              </Link>
            </li>
            {(isRivals.length !== 0) && <li><Link to="/concurents" className="headernav-people" onClick={closeNav}>Конкуренты</Link></li>}
            <li><a href="/" className="headernav-tech">Техническая поддержка</a></li>
            <li><Link to="/" className="headernav-exit" onClick={signoutFunc}>Выйти из аккаунта</Link></li>
          </ul>
        </div>
        <div id="headernav_overlay" onTouchStart={navOverFunc} onClick={navOverFunc}></div>
      </div>
    </>
  )
}

export default HeaderNav