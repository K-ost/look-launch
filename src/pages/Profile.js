import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Item from '../components/Item'
import PageTitle from '../components/PageTitle'
import './Profile.scss'
import ProfileCard from './ProfileCard'

function Profile(props) {

  // State
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)

  // User not logged
  if ( auth === false ) {
    props.history.push('/')
  }

  // State user
  let tariffName, tarffPrice
  let userPay = []
  if ( user.hasOwnProperty('tariff') ) {
    tariffName = user.tariff.name
    tarffPrice = user.tariff.price
    userPay = user.pay
  }


  // editTariffFunc
  const [editTariff, setEditTariff] = useState(false)
  const [editPay, setEditPay] = useState(false)
  const editTariffFunc = () => {
    !editTariff ? setEditTariff(true) : setEditTariff(false)
  }

  // editPayFunc
  const editPayFunc = () => {
    !editPay ? setEditPay(true) : setEditPay(false)
  }

  return (
    <>
      <PageTitle title="Профиль" />

      <div className="wrap">
        <div className="wrap_inner">
          <ProfileCard user={user} />
          
          <div className="profile_title">
            <h2 className="with_icon with_icon-clock">Подписка</h2>
            <button className={editTariff ? 'btn-save' : 'btn-edit'} onClick={editTariffFunc}></button>
          </div>
          <ul className="wrap-list">
            <Item label={tariffName} span={tarffPrice} edit={editTariff} />
          </ul>

          <div className="profile_title">
            <h2 className="with_icon with_icon-pay">Платёжная информация</h2>
            <button className={editPay ? 'btn-save' : 'btn-edit'} onClick={editPayFunc}></button>
          </div>
          <ul className="wrap-list">
            {userPay.map(item => {
              return <Item key={item.id} label={item.name} small={item.balance} radio="true" name="paygroup" edit={editPay} />  
            })}
          </ul>


          <button className="btn btn-block ripple">Привязать новую карту</button>
        </div>
      </div>
    </>
  )
}

export default Profile