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
    // search: null,
    page: 1,
    isShowModal: false,
    totalPages: null,
    id: null,
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
 
  addSearch = (data) => {
    return this.setState({
      search: data.search,
      photo: [],
      page: data.page,
    })
  }

  onLoadMoreButton = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))
  }

  toggleModal = (id) => {
        this.setState(({ isShowModal })=> ({
          isShowModal: !isShowModal,
          id: id,
        })) 
    
    }
  
  render() {
    const { photo, search, totalPages, page, isShowModal, id, isLoading, error } = this.state
    const result = this.state.photo.find((el) => el.id === this.state.id)
    
    return (
       <>
        <Searchbar
          addSearch={this.addSearch}
          value={search}
        />
        {photo.length > 0 &&
          <ImageGallery
            onClick={this.toggleModal}
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
            <img src={result.largeImageURL} alt={result.tag} />
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
