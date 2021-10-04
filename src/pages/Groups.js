import React, { useState } from 'react'
import './Group.scss'
import groupsJSON from '../data/groups.json'
import GroupList from './GroupList'
import PageTitle from '../components/PageTitle'
import Subscribe from '../components/Subscribe'
import Contacts from '../components/Contacts'

const Group = props => {

  // findGroup
  const [group, setGroup] = useState([])
  const findGroupFunc = e => {
    let { value } = e.target
    let communityList = groupsJSON.filter(item => item.name.toLowerCase().includes(value.toLowerCase()))
    if ( value ) {
      setGroup(communityList)
    } else {
      setGroup([])
    }
  }

  // showMore
  const itemsCount = 3
  const [currentPage, setCurrentPage] = useState(itemsCount)
  const showMore = e => {
    e.target.closest('.btn').classList.add('btn-refresh')
    setTimeout(() => {
      setCurrentPage(newCount => newCount + itemsCount)
      e.target.closest('.btn').classList.remove('btn-refresh')
    }, 300)
  }

  return (
    <>
      <PageTitle title="Смотри и запускай" border={true} text="Отслеживай рекламу конкурентов в ВК через поиск промопостов в их сообществах." />

      <div className="wrap">
        <div className="wrap_inner">
          <h2>Сообщества</h2>
          <div className="form-control">
            <label>Введите название/ссылку сообщества</label>
            <input type="search" className="input" placeholder="Сообщество" onChange={findGroupFunc} />
          </div>
        </div>

        {(group.length !== 0) &&
        <>
          <div className="wrap_inner communities_finded">
            <div className="communities_finded_title">Найдено сообществ</div>
            <h3>{group.length}</h3>
          </div>

          <ul className="communities_list">
            {group.map(item => {
              return <GroupList key={item.id} item={item} fav={true} />
            }).splice(0,currentPage)}
          </ul>

          {(currentPage < group.length) && 
            <div className="wrap_inner">
              <button className="btn btn-block ripple" onClick={showMore}>
                <span>Показать ещё</span>
              </button>
            </div>
          }
        </>
        }
      </div>

      <Subscribe />
      <Contacts />
    </>
  )
}

export default Group