import { Component } from 'react';
import css from './imageGallery.module.css'
// import Modal from 'components/modal/Modal';

class ImageGalleryItem extends Component {

    render() {
        const { onClick, photoData } = this.props

        return (
            <>
                <li className={css.ImageGalleryItem} onClick={()=> onClick(this.props.photoData.id)}>
                    <img
                        className={css.Image}
                        src={photoData.webformatURL}
                        alt={photoData.tags}
                        id={photoData.id}
                    />
                </li>
            
            </>
           
        )
    }
}


export default ImageGalleryItem

