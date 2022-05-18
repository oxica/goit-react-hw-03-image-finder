import s from './Loader.module.css';
import ClipLoader from 'react-spinners/ClipLoader';

export const Loader = () => {
  return (
    <div className={s.loader}>
      <ClipLoader size={150} />
    </div>
  );
};
