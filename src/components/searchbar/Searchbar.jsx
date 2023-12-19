import css from './searchbar.module.css'
import { Component } from 'react';
import {ReactComponent as Search} from 'components/icon/search.svg'

class Searchbar extends Component {
  state = {
    search: '',
    page: 1,
  }
  
  handlerSearch = ({target: {value}}) => {
    this.setState({
      search: value,
      page: 1,
    })
  }
  
  handlerSubmit = (e) => {
    e.preventDefault()
    this.props.addSearch(this.state)
  }

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button
            type="submit"
            className={css.SearchFormButton}
            onClick={this.handlerSubmit}>
            <Search width='28' height='28' stroke="#3f51b5"/>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            value={this.state.search}
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

