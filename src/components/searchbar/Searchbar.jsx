import css from './searchbar.module.css'
import { Component } from 'react';
import {ReactComponent as Search} from 'components/icon/search.svg'

class Searchbar extends Component {
  state = {
    search: null,
  }
  
  handlerSearch = ({ target: { value } }) => {
    this.setState({
      search: value.toLowerCase(),
    })    
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.addSearch(this.state.search)
  }

  render() {
    console.log(this.state)
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handlerSubmit}>
          <button
            type="submit"
            className={css.SearchFormButton}
          >
            <Search width='28' height='28' stroke="#3f51b5"/>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            name='search'
            autoComplete="off"
            onChange={this.handlerSearch}
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header> 
    )
}
}

export default Searchbar

