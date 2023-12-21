import css from './imageGallery.module.css'
import ImageGalleryItem from "./ImageGalleryItem"

const ImageGallery = ({ photo, onClick}) => {
  return (
    <ul className={css.ImageGallery}>
      {photo.map((el, i)=> (
        <ImageGalleryItem
          key={el.id+i}
          photoData={el}
          onClick={onClick}
        />
      ))} 
    </ul>
  )
}

export default ImageGallery