import PropTypes from 'prop-types';
import s from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <div className={s.thumb}>
      <button onClick={onLoadMore} className={s.button} type="button">
        Load More
      </button>
    </div>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};

// При нажатии на кнопку Load more должна догружаться следующая порция изображений и рендериться вместе с предыдущими.
// Кнопка должна рендерится только тогда, когда есть какие - то загруженные изобаржения.Если массив изображений пуст, кнопка не рендерится.
