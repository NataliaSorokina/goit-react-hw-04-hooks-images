import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { AppComponent } from './App.styled.js';
import { fetchImages } from 'API-service/API-service';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [per_page /* , setPer_page */] = useState(12);
  const [totalImages, setTotalImages] = useState(0);
  const [images, setImages] = useState([]);
  const [searchStatus, setSearchStatus] = useState('idle');
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handlePageIncrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleLargeImage = fullImage => {
    setLargeImage(fullImage);
    handleModalToggle();
  };

  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    async function getImages() {
      try {
        if (searchQuery.trim() === '') {
          return;
        }
        setSearchStatus('pending');
        const result = await fetchImages(searchQuery, page, per_page);
        const { hits, totalHits } = result;
        if (hits.length === 0) {
          toast.error(
            `Sorry, there are no images matching your search query '${searchQuery}'. Please try again.`,
          );
          return;
        }
        if (hits.length > 0 && page === 1) {
          toast(`${totalHits} images found.`);
        }
        if (totalHits < page * per_page) {
          toast('Sorry, but you have reached the end of search results.');
        }

        setSearchStatus('resolved');
        setImages(prevState => [...prevState, ...hits]);
        setTotalImages(totalHits);
        handleScroll();
      } catch (error) {
        setSearchStatus('rejected');
        toast.error('Error. We are sorry, but something went wrong.');
        console.log(error);
      }
    }
    getImages();
  }, [searchQuery, page, per_page]);

  const shouldRenderButton =
    totalImages > per_page && searchStatus !== 'pending';

  return (
    <AppComponent>
      <Searchbar onFormSubmit={handleFormSubmit} />
      {searchStatus === 'pending' && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} onSelect={handleLargeImage} />
      )}
      {shouldRenderButton && <Button onClick={handlePageIncrement} />}
      {showModal && (
        <Modal fullImage={largeImage} onClose={handleModalToggle} />
      )}
      <ToastContainer autoClose={3000} />
    </AppComponent>
  );
}
