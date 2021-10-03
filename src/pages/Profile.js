import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePayAction, removeTariffAction } from '../state/actions'
import Item from '../components/Item'
import PageTitle from '../components/PageTitle'
import './Profile.scss'
import ProfileCard from './ProfileCard'
import Modal from '../components/Modal'

function Profile(props) {

  // State
  const auth = useSelector(state => state.auth)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  // User not logged
  if ( auth === false ) {
    props.history.push('/')
  }

  // State user
  let tariffName, tarffPrice
  let userPay = []
  if ( user.hasOwnProperty('tariff') && user.tariff !== null ) {
    tariffName = user.tariff.name
    tarffPrice = user.tariff.price
  }
  if ( user.hasOwnProperty('tariff') ) {
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

  // REMOVE TARIFF
  const [tariffMethod, setTariffMethod] = useState('')
  const removeTariffPopup = e => {
    document.querySelector('#removeTariff').classList.add('opened')
    setTariffMethod(e.target.closest('.wrap-item').children[0].children[0].textContent)
  }
  const removeTariffFunc = () => {
    dispatch(removeTariffAction(tariffMethod))
    document.querySelector('#removeTariff').classList.remove('opened')
  }

  // REMOVE PAYMENT METHOD
  const [payMethodTitle, setPayMethodTitle] = useState('')
  const removePayPopup = e => {
    document.querySelector('#removePay').classList.add('opened')
    setPayMethodTitle(e.target.closest('.wrap-item').children[0].children[1].textContent)
  }
  const removePayFunc = () => {
    dispatch(removePayAction(payMethodTitle))
    document.querySelector('#removePay').classList.remove('opened')
  }

  return (
    <>
      <PageTitle title="Профиль" />

      <div className="wrap">
        <div className="wrap_inner">
          <ProfileCard user={user} />
          
          <div className="profile_title">
            <h2 className="with_icon with_icon-clock">Подписка</h2>
            {(user.tariff !== null) &&
              <button className={editTariff ? 'btn-save' : 'btn-edit'} onClick={editTariffFunc}></button>
            }
          </div>
          {(user.tariff !== null) ?
            <ul className="wrap-list">
              <Item label={`Тариф ${tariffName}`} span={tarffPrice} edit={editTariff} removeItem={removeTariffPopup} />
            </ul> :
            <div className="alert">Подписок нет</div>
          }          

          <div className="profile_title">
            <h2 className="with_icon with_icon-pay">Платёжная информация</h2>
            {(userPay.length !== 0) && <button className={editPay ? 'btn-save' : 'btn-edit'} onClick={editPayFunc}></button>}
          </div>
          {(userPay.length !== 0) ?
            <ul className="wrap-list">
              {userPay.map(item => {
                return <Item
                    key={item.id}
                    id={item.id}
                    label={item.name}
                    small={item.balance}
                    radio={true}
                    name="paygroup"
                    edit={editPay}
                    removeItem={removePayPopup}
                  />
              })}
            </ul>
            : <div className="alert">Нет добавленных платежных методов</div>
          }

          <button className="btn btn-block ripple">Привязать новую карту</button>
        </div>
      </div>

      <Modal id="removeTariff" cancel={true}>
        <p>Удалить {tariffMethod}?</p>
        <button className="btn btn-block" onClick={removeTariffFunc}>Удалить</button>
      </Modal>

      <Modal id="removePay" cancel={true}>
        <p>Удалить способ оплаты<br /> {payMethodTitle}</p>
        <button className="btn btn-block" onClick={removePayFunc}>Удалить</button>
      </Modal>
    </>
  )
}

export default Profile