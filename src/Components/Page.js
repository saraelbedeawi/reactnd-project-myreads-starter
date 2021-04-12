import React from 'react'
import Title from './Title'
import Shelf from './Shelf'

const Page = (props) => {
  return (
    <div className="Whole-page">
      <Title />
      <Shelf />
    </div>
  )
}

export default Page