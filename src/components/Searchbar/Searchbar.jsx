import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmitForm = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.value);
    this.onReset(event);
  };

  onChangeInput = event => {
    this.setState({
      value: event.currentTarget.value,
    });
  };

  onReset = event => {
    this.setState({ value: '' });
    event.target.reset();
  };

  render() {
    return (
      <header className={s.searchbar}>
        <form onSubmit={this.onSubmitForm} className={s.form}>
          <button type="submit" className={s.button}>
            <svg
              className={s.icon}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={48}
              height={48}
            >
              <path d="m12.188 2.725-.594.094c-3.8.581-7.138 3.431-8.369 7.125-.419 1.275-.5 1.794-.506 3.338 0 1.188.019 1.469.144 2.075C4.05 21.213 9.688 24.97 15.5 23.776c1.231-.256 2.7-.881 3.756-1.6l.606-.413 3.644 3.65c2.544 2.544 3.731 3.694 3.919 3.781.381.188.969.15 1.3-.087.369-.256.544-.556.575-.981.05-.694.206-.512-3.831-4.563l-3.706-3.719.375-.531c.462-.656 1.1-1.956 1.35-2.75 1.425-4.5-.231-9.294-4.144-12.037-.656-.456-1.919-1.081-2.7-1.331-1.119-.356-1.738-.45-3.081-.475-.669-.013-1.287-.013-1.375.006zm2.581 2.744c1.506.263 2.925.994 4.069 2.094 1.294 1.244 2.094 2.75 2.381 4.494.144.856.1 2.294-.087 3.069-.75 3.031-2.969 5.25-6.006 6.006-.775.188-2.213.231-3.069.087A7.922 7.922 0 0 1 7.826 19.1C3.801 15.256 4.807 8.675 9.807 6.162c.781-.4 1.944-.725 2.881-.813.444-.037 1.525.019 2.081.119z" />
            </svg>
          </button>

          <input
            onChange={this.onChangeInput}
            className={s.input}
            value={this.state.value}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};



// Компонент принимает один проп onSubmit - функцию для передачи значения инпута при сабмите формы. Создает DOM-элемент следующей структуры.

//   /* <header class="searchbar">
//   <form class="form">
//     <button type="submit" class="button">
//       <span class="button-label">Search</span>
//     </button>

//     <input
//       class="input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header> */
