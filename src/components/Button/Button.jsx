import css from './button.module.css'

const Button = ({ onLoadMoreButton }) => {
    return <button type="button" onClick={onLoadMoreButton} className={css.Button}>Load More</button>
} 

export default Button