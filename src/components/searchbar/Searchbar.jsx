import css from './searchbar.module.css'
import { Component } from 'react';
import {ReactComponent as Search} from 'components/icon/search.svg'

class Searchbar extends Component {
  state = {
    search: '',
  }
  
  handlerSearch = ({target: { value } }) => {
    console.log(value)
    value ===''? alert ('Enter data to search') : this.setState({
      search: value.toLowerCase(),
      photo: [],
      page: 1,
    })    
  }

  handlerSubmit = (e) => {
    e.preventDefault()
    
    if (this.state.search === e.target.value) {
      if (!e.target.value) return 
      return alert (`You have already viewed this ${e.target.value}`)      
    }
    this.props.addSearch(this.state)
  }

  render() {
    console.log(this.state)
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onClick={this.handlerSubmit}>
          <button
            type="submit"
            className={css.SearchFormButton}
          >
            <Search width='28' height='28' stroke="#3f51b5"/>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
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

