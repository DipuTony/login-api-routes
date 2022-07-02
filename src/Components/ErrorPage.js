import React from 'react'

export default function ErrorPage() {
  const url = window.location.href;
  return (
    <div>
      <h1>404</h1>
      <p>This Url Not Found</p>
      <p className='redText'>{url}</p>
    </div>
  )
}
