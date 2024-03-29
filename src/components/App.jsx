import { Component } from "react";
import ImageGallery from "./imageGallery/ImageGallery";
import { getAllPhoto } from 'components/api/api'
import Searchbar from "./searchbar/Searchbar";
import Button from './Button/Button'
import Modal from "./modal/Modal";
import Loader from "./loder/Loader";

export class App extends Component {

  state = {
    photo: [],
    error: '',
    search: null,
    page: 1,
    isShowModal: false,
    totalPages: null,
    img: null,
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search || prevState.page !== this.state.page) {
      const { search, page } = this.state
      this.getPhoto(search, page)
    }
  }

  getPhoto = async (search, page) => {
    try {

      this.setState({
        isLoading: true,
      })

      const { data } = await getAllPhoto(search, page)
      console.log(data)
      if (data.hits.length === 0) {
        alert('Sorry image not found...')
        return
      }

      this.setState(prevState => ({
        photo: [...prevState.photo, ...data.hits],
        totalPages: Math.ceil(data.totalHits / 12),
      }))

    } catch (error) {
      this.setState({
        error: error.message
      })
    } finally {
      this.setState({
        isLoading: false,
      })
    }
  }
 
  addSearch = (name) => {

     if (this.state.search === name) {
      return alert(`You have already viewed this request!`)
    }
    this.setState({
      search: name,
      photo: [],
      page: 1,
    })

  }

  onLoadMoreButton = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))
  }

  getLargeImageURL = (img) => {
    console.log(img)
    this.setState({
      isShowModal: true,
      img: img,
    })
  }
  
  toggleModal = () => {
        this.setState({
          isShowModal: false,
          img: '',
        }) 
    }
  
  render() {
    const { photo, totalPages, page, isShowModal, id, isLoading, error, img } = this.state
    return (
       <>
        <Searchbar
          addSearch={this.addSearch}
          // value={search}
        />
        {photo.length > 0 &&
          <ImageGallery
            onClick={this.getLargeImageURL}
            photo={photo}
          />}

        {photo.length !== 0 &&
          totalPages > page &&
          !isLoading &&
          <Button
            onLoadMoreButton={this.onLoadMoreButton}
            
          />}

        {isLoading && <Loader />}
        {isShowModal &&
          id !== null &&
          <Modal
            onClose={this.toggleModal}
          >
            <img src={img.src} alt={img.alt} />
          </Modal>}
        
        {error &&
          <h1 style={{
            textAlign: 'center',
            fontSize: 48,
          }}>
            {error}
          </h1>}
    </>
  );
  }
  
};
