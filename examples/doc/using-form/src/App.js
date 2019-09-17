import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: 'Nicolas', lastname: 'Isnardi', country: 'Canada' }
      ]
    };
  }

  handleSubmit = (user) => {
    this.setState({
      users: [
        ...this.state.users,
        ...user,
      ]
    });
  }

  render() {
    return (
      <div className="App" >
        <UserForm onSubmitHandler={this.handleSubmit} />
        <div>
          <ul>
            {this.state.users.map((user) => <li key={user.name}>{user.name} {user.lastname} : {user.country}</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
