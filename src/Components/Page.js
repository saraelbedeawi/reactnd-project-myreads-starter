import React from 'react'
import Title from './Title'
import Shelf from './Shelf'
import SearchBar from './SearchBar'

const Page = (props) => {
  return (
    <div className="Whole-page">
      <SearchBar/>
      <Title />
      <Shelf />
    </div>
  )
}

export default Page