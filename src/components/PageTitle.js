import React from 'react'

const PageTitle = props => {
  return (
    <div className={props.border ? 'pagetitle pagetitle-border' : 'pagetitle'}>
      <h1>{props.title}</h1>
      {props.text}
    </div>
  )
}

export default PageTitle