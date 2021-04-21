import React from 'react'
import { Link } from 'react-router-dom'

const NewBook = () => {
  return (
    <div className="open-search">
      <Link to="/search">
    	Search to add new book :
      </Link>
    </div>
  )
}

export default NewBook