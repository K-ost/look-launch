import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { loadPostsAction, subscribe } from '../state/actions'
import groupsJSON from '../data/groups.json'
import postsJSON from '../data/posts.json'
import GroupPosts from './GroupPosts'
import PageTitle from "../components/PageTitle"
import Subscribe from '../components/Subscribe'
import Contacts from '../components/Contacts'
import Sort from "../components/Sort"


const GroupFull = props => {

  // Contstructor
  const { id } = props.match.params
  const community = groupsJSON.find(item => item.screen_name === id)
  const dispatch = useDispatch()
  const subsStatus = useSelector(state => state.subscribed)
  const loadPostsStatus = useSelector(state => state.loadposts)
  const auth = useSelector(state => state.auth)

  // Loading posts
  useEffect(() => {
    dispatch(loadPostsAction())
  },[])

  // Subscribe function
  const subsFunc = () => {
    dispatch(subscribe(true))
  }

  // loginPopup
  const loginPopup = e => {
    document.querySelector('#loginpopup').classList.add('opened')
  }

  
  // SORTING
  const [postsState,setPostsState] = useState(postsJSON)
  const [sortDateAsc,setSortDateAsc] = useState(false)
  const [sortDateDesc,setSortDateDesc] = useState(true)
  const [sortLikesAsc,setSortLikesAsc] = useState(false)
  const [sortLikesDesc,setSortLikesDesc] = useState(false)

  // sortDateFunc
  const sortDateFunc = () => {
    setSortLikesAsc(false)
    setSortLikesDesc(false)
    if ( !sortDateAsc ) {
      setSortDateAsc(true)
      setSortDateDesc(false)
      let dateAsc = postsState.sort((a,b) => new Date(a.date) - new Date(b.date))
      setPostsState(dateAsc)
    } else {
      setSortDateAsc(false)
      setSortDateDesc(true)
      let dateDesc = postsState.sort((a,b) => new Date(b.date) - new Date(a.date))
      setPostsState(dateDesc)
    }
  }

  // sortLikesFunc
  const sortLikesFunc = () => {
    setSortDateAsc(false)
    setSortDateDesc(false)
    if ( !sortLikesAsc ) {
      setSortLikesAsc(true)
      setSortLikesDesc(false)
      let likesDesc = postsState.sort((a,b) => a.likes.count - b.likes.count)
      setPostsState(likesDesc)
    } else {
      setSortLikesAsc(false)
      setSortLikesDesc(true)
      let likesDesc = postsState.sort((a,b) => b.likes.count - a.likes.count)
      setPostsState(likesDesc)
    }
  }

  // Loadmore posts
  const currentPage = 2
  const [currentPageState, setCurrentPageState] = useState(currentPage)
  const loadPostsFunc = e => {
    e.target.closest('.btn').classList.add('btn-refresh')
    setTimeout(() => {
      e.target.closest('.btn').classList.remove('btn-refresh')
      setCurrentPageState(currentPageState => currentPageState + currentPage)
    }, 300)
  }


  // backLinkFunc
  const backLinkFunc = () => {
    props.history.goBack()
  }


  return (
    <>
      <PageTitle title="Смотри и запускай" border={true} text="Отслеживай рекламу конкурентов в ВК через поиск промопостов в их сообществах." />

      <div className="wrap">
        <div className="wrap_inner">
        
          <div className="community_top">
            <div className="community_header">
              <button onClick={backLinkFunc} className="btn-back"></button>
              <img src={community.photo_50} alt="" />
              <h3>{community.name}</h3>
            </div>
            {loadPostsStatus &&
            <div className="communities_finded" id="comm_finded">
              <div>Промопостов в сообществе</div>
              <h3>{postsState.length}</h3>
            </div>}
          </div>

          {!loadPostsStatus && <div className="community_wait" id="comm_wait">
            Ищем для вас рекламу!<br /> На это нам может понадобиться до 1 минуты...
          </div>}
          
          {loadPostsStatus &&
            <div className={!subsStatus ? 'commmunity_hidden' : 'commmunity_hidden visible'} id="comm_post">

              <Sort
                sortDate={sortDateFunc}
                sortLikes={sortLikesFunc}
                ascDate={sortDateAsc}
                descDate={sortDateDesc}
                ascLikes={sortLikesAsc}
                descLikes={sortLikesDesc}
              />

              <GroupPosts posts={postsState} page={currentPageState} click={loadPostsFunc} />
              
              {!subsStatus && <div className="modal_inner">
                <h2>Оформите подписку</h2>
                <p>Для просмотра всех результатов поиска вам необходимо оформить подписку: 59 ₽/мес.</p>
                {auth
                  ? <button className="btn btn-primary btn-block" onClick={subsFunc}>Подписаться и оплатить</button>
                  : <button className="btn btn-primary btn-block" onClick={loginPopup}>Подписаться и оплатить</button>
                }
                <Link to="/" className="modal-close"></Link>
              </div>}
              
            </div>
          }

        </div>
      </div>

      <Subscribe />
      <Contacts />
    </>
  )
}

export default GroupFull