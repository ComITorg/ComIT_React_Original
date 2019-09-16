import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {
  render() {
    return <div className="App">
      <Counter init={0} />
      <Counter init={10} />
      <Counter init={100} />

    </div>;
  }
}

export default App;