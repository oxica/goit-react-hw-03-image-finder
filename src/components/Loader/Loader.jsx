import DotLoader from 'react-spinners/ClipLoader';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.overlay}>
      <DotLoader size={250} color={'#461646'} className={s.loader} />
    </div>
  );
}
