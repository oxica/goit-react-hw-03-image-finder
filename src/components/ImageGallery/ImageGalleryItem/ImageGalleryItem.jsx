import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ URL, onToggleModal, onClickImg }) => (
  <li onClick={onToggleModal} className={s.item}>
    <img onClick={onClickImg} className={s.image} src={URL} alt="" />
  </li>
);

ImageGalleryItem.propTypes = {
  URL: PropTypes.string.isRequired,
  onClickImg: PropTypes.func.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};

//   /* <li class="gallery-item">
//   <img src="" alt="" />
// </li>; */
