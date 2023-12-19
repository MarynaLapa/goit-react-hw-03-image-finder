import css from './imageGallery.module.css'
import ImageGalleryItem from "./ImageGalleryItem"
import { nanoid } from 'nanoid'

const ImageGallery = ({ photo, onClick}) => {
  return (
    <ul className={css.ImageGallery}>
      {photo.map(el => (
        <ImageGalleryItem
          key={nanoid()}
          photoData={el}
          onClick={onClick}
        />
      ))} 
    </ul>
  )
}

export default ImageGallery