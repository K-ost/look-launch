import React from 'react'

const GroupPosts = props => {

  // fullPost
  const fullPostFunc = e => {
    e.preventDefault()
    let height = e.target.closest('.commmunity_post').childNodes[1].childNodes[0].offsetHeight
    if ( !e.target.classList.contains('active') ) {
      e.target.classList.add('active')
      e.target.textContent = 'Скрыть текст'
      e.target.closest('.commmunity_post').childNodes[1].style.maxHeight = height + 'px'
    } else {
      e.target.classList.remove('active')
      e.target.textContent = 'Смотреть весь пост'
      e.target.closest('.commmunity_post').childNodes[1].removeAttribute('style')
    }
  }

  const months = [
    'Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня',
    'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'
  ]

  return (
    <>
      <ul className="commmunity_postlist">
        {props.posts.map(post => {

          // Create Date
          let unixdate = post.date
          let fulldate = new Date(unixdate * 1000)
          let date = fulldate.getDate()
          let month = months[fulldate.getMonth() - 1]
          let hours = fulldate.getHours()
          let minutes = '0' + fulldate.getMinutes()
          let totalDate = `${date} ${month} ${hours}:${minutes.substr(-2)}`
          

          return (
            <li className="commmunity_post" key={post.id}>
              {post.title && <h3>{post.title}</h3>}
              
              <div className="commmunity_post-date">{totalDate}</div>

              <div className="commmunity_post-text">
                <div className="commmunity_post-textin">
                  {post.text}
                </div>
              </div>

              {(post.attachments[0].type === 'link') &&
                <div className="postlink">
                  <div className="postlink_img">
                    <a href={post.attachments[0].link.url} target="_blank" rel="noreferrer">
                      <img src={post.attachments[0].link.photo.sizes.find(item => item.width === 510).url} alt="" />
                    </a>
                  </div>
                  <div className="postlink_details">
                    <div className="postlink_entry">
                      <div className="postlink_title">{post.attachments[0].link.title}</div>
                      <div className="postlink_url">{post.attachments[0].link.caption}</div>
                    </div>
                    <a href={post.attachments[0].link.button.action.url} className="btn btn-sm btn-primary ripple" target="_blank" rel="noreferrer">
                      {post.attachments[0].link.button.title}
                    </a>
                  </div>
                </div>
              }
              <div className="commmunity_post-likes">{post.likes.count}</div>

              {(post.text.length > 256) && 
                <a href="/" className="commmunity_post_all" onClick={fullPostFunc}>Смотреть весь пост</a>
              }
            </li>
          )
        }).splice(0,props.page)}
      </ul>
      {(props.page < props.posts.length) &&
        <button className="btn btn-block ripple" onClick={props.click}><span>Показать ещё</span></button>
      }
    </>
  )
}

export default GroupPosts