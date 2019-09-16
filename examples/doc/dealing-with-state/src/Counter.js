import React, { Component } from 'react';

class Counter extends Component {

  // This will get executed one time each time the component gets a new instance
  constructor(props) {
    // As we extend the React.Component class (in this case just Component) we need to call that class constructor as well
    super(props);

    // We assign an object as this.state initial value
    this.state = {
      counter: props.init || 0,
      otherStateValue: 10,
    };
  }

  // Each time you click a button will call this event handler
  // We will set the state counter by incrementing the previous value by one
  // As we assign only the counter state value the otherStateValue doesn't get updated
  // This will add this change to React queue to update. Remember setState is async and there's other ways to deal with previous state properly.
  addCounterHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  // Each time you click a button will call this event handler
  // We will set the state counter by reduce the previous value by one
  removeCounterHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  // Methods in React are camelCase so onclick becomes onClick
  // We assign an event handler for each of the buttons
  // Everytime that this component gets render will show the value of the state
  render() {
    return <div>
      <div>{this.state.counter}</div>
      <div>
        <button onClick={this.addCounterHandler}>+</button>
        <button onClick={this.removeCounterHandler}>-</button>
      </div>
    </div>;
  }
}

export default Counter;