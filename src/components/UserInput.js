import React, { Component } from 'react';

class UserInput extends Component {
    state = {
      username: '',
      hometown: ''
    };


    handleSubmit = (event) => {
      event.preventDefault();
      this.props.store.dispatch({
        type: 'ADD_USER',
        user: this.state
      })
    }

    handleChange = (event) => {
      this.setState ({
        [event.target.name]: event.target.value
      })
    }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        <p>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="username" />
      </p>
      <p>
        <input
          type="text"
          name="hometown"
          value={this.state.hometown}
          onChange={this.handleChange}
          placeholder="hometown" />
      </p>
      <input type="submit" />

        </form>
      </div>
    );
  }
};

export default UserInput;
