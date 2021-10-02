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

  return (
    <>
      <ul className="commmunity_postlist">
        {props.posts.map(post => {
          return (
            <li className="commmunity_post" key={post.id}>
              {post.title && <h3>{post.title}</h3>}
              
              <div className="commmunity_post-date">{post.date}</div>

              <div className="commmunity_post-text">
                <div className="commmunity_post-textin">
                  {post.text}
                </div>
              </div>

              {post.attachments[0].photo && 
                <div className="commmunity_post-text"><img src={post.attachments[0].photo.sizes[0].url} alt="" /></div>
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
        <button className="btn btn-block" onClick={props.click}><span>Показать ещё</span></button>
      }
    </>
  )
}

export default GroupPosts