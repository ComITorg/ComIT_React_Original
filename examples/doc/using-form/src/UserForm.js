import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastname: '',
      country: 'Canada',
    }
  }

  changeNameHandler = (event) => {
    const { target } = event;
    this.setState({ name: target.value });
  }

  changeLastnameHandler = (event) => {
    const { target } = event;
    this.setState({ lastname: target.value });
  }

  render() {
    return <div>
      <form>
        <input type="text" name="name" value={this.state.name} onChange={this.changeNameHandler} />
        <input type="text" name="lastname" value={this.state.lastname} onChange={this.changeLastnameHandler} />
        <button>Create</button>
      </form>
    </div>;
  }
}

export default UserForm;