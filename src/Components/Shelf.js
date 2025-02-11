 import React, { Component } from 'react'
 
import * as BooksAPI from '../BooksAPI'
import { Link } from 'react-router-dom'
import Row from './Row'

class Shelf extends Component {
  state = {
  	allBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ allBooks: books })
	  })
  }

  onShelfUpdate = (book, shelfName) => {
    const { allBooks } = this.state
	const updateIndex = allBooks.findIndex(b => b.id === book.id)
    const updateBook = allBooks[updateIndex]
    updateBook.shelf = shelfName

    this.setState({
      allBooks: [...allBooks.slice(0, updateIndex), updateBook, ...allBooks.slice(updateIndex + 1)]
    })

    BooksAPI.update(book, shelfName)
  }

  render() {
    const { allBooks } = this.state

    const shelfRows = [
      {
    	name: 'Read',
    	books: allBooks.filter(book => book.shelf === 'read')
      },
      {
    	name: 'Want To Read',
    	books: allBooks.filter(book => book.shelf === 'wantToRead')
      },
      {name: 'Reading Now',
    	books: allBooks.filter(book => book.shelf === 'currentlyReading')}
     
    ]
	return (
      <div className="list-books-content">
        <ul>
          {shelfRows && shelfRows.map((shelf, index) => (
            <Row
              key={index}
              title={shelf.name}
              books={shelf.books}
              onShelfUpdate={this.onShelfUpdate}/>
          ))}
		</ul>
    <Link to="/search">
    	Search book to add:
      </Link>
	  </div>
    )
  }
}

export default Shelf