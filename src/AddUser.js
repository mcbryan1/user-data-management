import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewUser } from "./redux/actions";
import { Link } from "react-router-dom";

class AddUser extends Component {
  handleOnSubmit = event => {
    event.preventDefault();
    let newUser = {
      id: Math.random()
        .toString(36)
        .substr(2, 5),
      name: event.target.elements.name.value,
      userName: event.target.elements.userName.value,
      userEmail: event.target.elements.userEmail.value,
      userPassword: event.target.elements.userPassword.value
      
    };
    this.props.addNewUser(newUser);
    this.props.history.push("/");
  };
  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <Link to="/">
            <p>Users</p>
        </Link>
        <div class="form-group">
          <label for="exampleInputEmail1">Name</label>
          <input
            name="name"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">User Name</label>
          <input
            name="userName"
            type="text"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            name="userEmail"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Password</label>
          <input
            name="userPassword"
            type="password"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          /> 
        </div>
        <button type="submit" class="btn btn-primary">
          Add User
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  addNewUser
};

export default connect(null, mapDispatchToProps)(AddUser);
