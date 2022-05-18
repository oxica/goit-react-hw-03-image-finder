import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images, onToggleModal, onClickImg }) => {
  return (
    <ul className={s.gallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          onClickImg={onClickImg}
          URL={webformatURL}
          onToggleModal={onToggleModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  onClickImg: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onToggleModal: PropTypes.func.isRequired,
};

//   /* <ul class="gallery">
//   <!-- Набор <li> с изображениями -->
// </ul> */
