import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
  }

  onCloseModal = event => {
    if (event.code === 'Escape') {
      this.props.onToggleModal();
    }
  };

  onBackdropCloseModal = event => {
    if (event.target === event.currentTarget) {
      this.props.onToggleModal();
    }
  };

  render() {
    return createPortal(
      <div className={s.overlay} onClick={this.onBackdropCloseModal}>
        <div className={s.modal}>
          <img src={this.props.img} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

// При клике по элементу галереи должно открываться модальное окно с темным оверлеем и отображаться большая версия изображения.Модальное окно должно закрываться
// по нажатию клавиши ESC или по клику на оверлее.

// Внешний вид похож на функционал этого VanillaJS-плагина, только вместо белого модального окна рендерится изображение (в примере нажми Run). Анимацию делать не нужно!

// <div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>
