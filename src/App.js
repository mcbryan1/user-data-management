import React, { Component } from 'react';
import './index.css'
import Home from './Home';
import AddUser from './AddUser';
import { BrowserRouter, Route } from 'react-router-dom'
import EditUser from './EditUser';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/edit/:id" component={EditUser} />
      </BrowserRouter>
    );
  }
}
export default App;