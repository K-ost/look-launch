import React from 'react'
import { Link } from 'react-router-dom'
import HeaderNav from './HeaderNav'
import Modal from './Modal'
import './Header.scss'
import logo from '../assets/images/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../state/actions'

const Header = props => {

  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  
  // loginPopup
  const loginPopup = e => {
    document.querySelector('#loginpopup').classList.add('opened')
  }

  // Auth
  const signinFunc = () => {
    dispatch(signin(true))
  }

  // openNav
  const openNav = e => {
    e.target.closest('.btn-bars').classList.toggle('active')
    document.querySelector('#headernav').classList.toggle('opened')
  }
  

  return (
    <>
      <header className="header">
        <Link to="/"><img src={logo} alt="" /></Link>

        {!auth ?
          <button className="btn-user" onClick={loginPopup}></button> :
          <button className="btn-bars" onClick={openNav}></button>
        }
      </header>

      {auth && <HeaderNav />}

      {!auth && <Modal id="loginpopup" title="Войдите в аккаунт">
        <div className="modal-text">Для использования сервиса необходимо авторизоваться</div>
        <button className="btn btn-primary btn-block btn-vk ripple" onClick={signinFunc}><span>Войти через ВКонтакте</span></button>
      </Modal>}
    </>
  )
}
export default Header