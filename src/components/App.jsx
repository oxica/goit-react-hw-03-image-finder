import { Component } from 'react';
import Searchbar from './Searchbar/index';

class App extends Component {
  state = {
    images: [],
  };

  render() {
    return (
      <div>
        <Searchbar />
      </div>
    );
  }
}

export default App;
