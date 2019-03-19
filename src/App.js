import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Product from './components/productList'
import Search from './components/search'
import ManageProduct from './components/manageProduct'
import PageNotFound from  './components/pageNotFound'
import ProductDetail from './components/productDetail'
import ScrolltoTop from  './components/scrolltoTop'
import Cart from './components/cart'
import History from './components/history'
import { Route, withRouter, Switch } from 'react-router-dom'
import {connect} from 'react-redux'
import cookie from 'universal-cookie'
import {keepLogin, cookieChecked} from './1.actions'
import './App.css';
import historyDetail from './components/historyDetail';

// withRouter => Untuk tersambung ke Reducer dengan connect, tapi di dalam komponen ada routing
const objCookie = new cookie()
class App extends Component {
  
  // //untuk menyimpan cookie akun google
  // componentWillReceiveProps(newProps){
  //   objCookie.set('userData',newProps.username,{path :'/'})
  // }
  
  componentDidMount() {
    var terserah = objCookie.get('userData')
    if(terserah !== undefined){
      this.props.keepLogin(terserah)
    } else {
      this.props.cookieChecked()
    }
  }
  render() {
    if(this.props.cookie){
    return (
      <div>
          <Navbar/>
          <ScrolltoTop>
          <Switch>
            
          <Route path='/' component={Home} exact/>
          <Route path='/login' component={Login} exact/>
          <Route path='/register' component={Register} exact/>
          <Route path='/products' component={Product} exact/>
          <Route path='/search' component={Search} exact/>
          <Route path='/manage' component={ManageProduct} exact/>
          <Route path='/product-detail/:id' component={ProductDetail} exact/>
          <Route path='/cart' component={Cart} exact/>
          <Route path='/history' component={History} exact/>
          <Route path='/history-detail/:id' component={historyDetail} exact/>
          <Route path='*' component={PageNotFound} exact/>
          
          </Switch>
          </ScrolltoTop>
      </div>
    );
  }
  return <div> Loading ...</div>
  }
}

const mapStatetoProps = (state) => {
    return {
      username : state.user.username,
      cookie : state.user.cookie
    }
}

export default withRouter(connect(mapStatetoProps, {keepLogin, cookieChecked})(App));
