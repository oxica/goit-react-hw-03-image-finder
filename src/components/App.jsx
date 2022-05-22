import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImgApiService } from '../services/pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import s from './App.module.css';

const imgApiService = new ImgApiService();

export class App extends Component {
  state = {
    imageArr: [],
    query: '',
    error: null,
    isLoading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state;
    imgApiService.query = query;

    if (prevState.query !== query) {
      this.onFetchImage();
    }
  }

  onSearch = newQuery => {
    this.setState({
      query: newQuery,
    });
  };

  onToggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClickImg = event => {
    this.setState({
      largeImageURL: this.state.imageArr.find(
        img => img.webformatURL === event.target.src
      ).largeImageURL,
    });
  };

  onFetchImage = async () => {
    this.setState({ isLoading: true });

    try {
      const imageArr = await imgApiService.fetchImage();
      this.setState({ imageArr });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  onLoadMore = async () => {
    this.setState({ isLoading: true });

    try {
      const imageArr = await imgApiService.fetchImage();
      this.setState(prevState => ({
        imageArr: [...prevState.imageArr, ...imageArr],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, imageArr, showModal, largeImageURL } = this.state;
    return (
      <div className={s.container}>
        <Searchbar onSubmit={this.onSearch} />

        {
          <ImageGallery
            onClickImg={this.onClickImg}
            images={imageArr}
            onToggleModal={this.onToggleModal}
          />
        }
        {showModal && (
          <Modal onToggleModal={this.onToggleModal} img={largeImageURL} />
        )}
        {isLoading && <Loader />}
        {imageArr.length >= 12 && !isLoading && (
          <Button onLoadMore={this.onLoadMore} />
        )}
      </div>
    );
  }
}
