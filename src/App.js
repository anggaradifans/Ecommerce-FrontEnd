import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Product from './components/productList'
<<<<<<< HEAD
import Search from './components/search'
import { Route, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {keepLogin} from './1.actions'
import './App.css';

// withRouter => Untuk tersambung ke Reducer dengan connect, tapi di dalam komponen ada routing
const objCookie = new cookie()
class App extends Component {
  componentDidMount() {
=======
import { Route ,withRouter } from 'react-router-dom' 
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import { keepLogin } from './1.actions'
import './App.css';

// withRouter => Untuk tersambung ke Reducer dengan connect, 
// tapi di dalam komponen ada routing

const objCookie = new cookie()
class App extends Component {
  componentDidMount(){
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
    var terserah = objCookie.get('userData')
    if(terserah !== undefined){
      this.props.keepLogin(terserah)
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
  render() {
    return (
      <div>
          <Navbar/>
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
<<<<<<< HEAD
          <Route path='/products' component={Product} exact/>
          <Route path='/search' component={Search} exact/>
=======
          <Route path='/product' component={Product} exact/>
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
      </div>
    );
  }
}

<<<<<<< HEAD
export default withRouter(connect(null, {keepLogin})(App));
=======
export default withRouter(connect(null , {keepLogin})(App));
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
