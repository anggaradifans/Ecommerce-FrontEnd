import React from 'react'
<<<<<<< HEAD
import { Link , Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {onLogin} from './../1.actions'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'

//COOKIE MENYIMPAN DATA DI BROWSER
const Cookie = new cookie()
=======
import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { onLogin } from './../1.actions'
import Loader from 'react-loader-spinner'
import cookie from 'universal-cookie'
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591

// MENYIMPAN DATA DI BROWSER
const Cookie = new cookie()
class Login extends React.Component{
<<<<<<< HEAD
    // KE TRIGGER KALAU ADA PERUBAHAN PROPS YAITU GLOBAL STATE
    componentWillReceiveProps(newProps){
        Cookie.set('userData',newProps.username,{path :'/'})
    }
    onBtnLoginClick = () => {
        var username = this.refs.username.value
        var password = this.refs.password.value
        this.props.onLogin(username,password)
    }
    
    renderBtnOrLoading = () => {
        if(this.props.loading === true){
            return <Loader type="Audio"
            color="#00BFFF"
            height="40"	
            width="40"/>
        } else {
            return <button type="button" className="btn btn-primary" onClick={this.onBtnLoginClick} style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
        }

    }

    renderErrorMessage = () => {
        if(this.props.error !== ""){
            return <div className="alert alert-danger mt-3" role="alert">
=======
        
    // KE TRIGER KALAU ADA PERUBAHAN PROPS YAITU GLOBAL STATE
    componentWillReceiveProps(newProps){
        console.log(newProps)
        Cookie.set('userData',newProps.username,{path :'/'})
    }
    onBtnLoginClick = () => {
        var username = this.refs.username.value // fikri
        var password = this.refs.password.value // rahasia123
        this.props.onLogin(username,password)
    }

    renderBtnOrLoading = () => {
        if(this.props.loading === true){
            return <Loader
                    type="Audio"
                    color="#00BFFF"
                    height="50"	
                    width="50"
                    />
        }else{
            return <button type="button" className="btn btn-primary" onClick={this.onBtnLoginClick} style={{width:"300px"}} ><i className="fas fa-sign-in-alt" /> Login</button>
        }
        
    }
    renderErrorMessege = () => {
        if(this.props.error !== ""){
            return <div class="alert alert-danger mt-3" role="alert">
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                        {this.props.error}
                    </div>
        }
    }
<<<<<<< HEAD
    render(){

=======

    render(){
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
        if(this.props.username !== ""){
            return <Redirect to='/'/>
        }
        return(
            <div className="container myBody" style={{minHeight:"600px"}}>
                <div className="row justify-content-sm-center ml-auto mr-auto mt-3" >
                    
                    <form className="border mb-3" style={{padding:"20px", borderRadius:"5%"}} ref="formLogin">
                        <fieldset>
                            
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Username</label>
                                <div className="col-sm-9">
                                <input type="text" ref="username" className="form-control" id="inputEmail" placeholder="Username" required autoFocus/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Password</label>
                                <div className="col-sm-9">
                                <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" onKeyPress={this.renderOnKeyPress} required />
                                </div>
                            </div>
                            
                            <div className="form-group row">
<<<<<<< HEAD
                                <div className="col-12" style={{textAlign:"center"}}>
                                    {this.renderBtnOrLoading()}
                                    {this.renderErrorMessage()}
=======
                                <div className="col-12" style={{textAlign:'center'}}>
                                    {this.renderBtnOrLoading()}
                                    {this.renderErrorMessege()}
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                </div>
                                    
                            </div>
                            <div className="btn my-auto"><p>Don't have Account? <Link to="/register" className="border-bottom">Sign Up!</Link></p></div>
                        </fieldset>
                    </form>
                    
                </div>                
            </div>
        )
    }
}
const mapsStateToProps =(state) => {
    return{
        username : state.user.username,
        loading : state.user.loading,
        error : state.user.error,
    }
}


<<<<<<< HEAD
const mapsStatetoProps = (state) => {
    return {
        username : state.user.username,
        loading : state.user.loading,
        error : state.user.error,
    }
}

export default connect(mapsStatetoProps,{onLogin})(Login)
=======
export default connect(mapsStateToProps,{ onLogin })(Login)
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
