import React from 'react'
<<<<<<< HEAD
import { Link , Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {userRegister} from './../1.actions'
=======
import { Link,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { userRegister } from './../1.actions'
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
import Loader from 'react-loader-spinner'

class Register extends React.Component{
    state = {error : ''}
    componentWillReceiveProps(newProps){
        if(newProps.error !== ""){
            this.setState({error : newProps.error})
        }
    }
<<<<<<< HEAD

    renderErrorMessage = () => {
        if(this.state.error !== ""){
            return <div className="alert alert-danger mt-3" role="alert">
=======
    renderLoadingOrBtn =() => {
        if(this.props.loading === true){
            return <Loader
                    type="Audio"
                    color="#00BFFF"
                    height="50"	
                    width="50"
                    />
        }else{
            return <button type="button"    className="btn btn-primary" style={{width:"300px"}} onClick={this.onBtnRegisterClick} ><i className="fas fa-sign-in-alt"  /> Sign Up!</button>
        }
    }

    renderErrorMessege = () => {
        if(this.state.error !== ""){
            return <div class="alert alert-danger mt-3" role="alert">
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                        {this.state.error}
                    </div>
        }
    }
<<<<<<< HEAD

    onBtnRegisterClick = () => {
        var username = this.refs.username.value
        var password =  this.refs.password.value
        var email = this.refs.email.value
        var phone = this.refs.phone.value
        if(username === "" || password === "" || email === "" || phone === ""){
            this.setState({error : "Harus diisi semua"})
        } else {
            this.props.userRegister(username,password,email,phone)
        }
    }
    renderLoaderOrBtn = () => {
        if(this.props.loading === true){
            return <Loader type="Audio"
            color="#00BFFF"
            height="40"	
            width="40"/>
        } else {
            return <button type="button" className="btn btn-primary" onClick={this.onBtnRegisterClick} style={{width:"300px"}}><i className="fas fa-sign-in-alt" /> Sign Up!</button>       
         }
    }

    render(){
        if(this.props.username !== ""){
            return <Redirect to='/'/>
=======
    onBtnRegisterClick = () => {
        var username = this.refs.username.value
        var password = this.refs.password.value
        var email = this.refs.email.value
        var phone = this.refs.phone.value
        if(username === "" || password ===""||email === "" ||phone ===""){
            this.setState({error : "Harus diisi semua"})
        }else{
            this.props.userRegister(username,password,email,phone)
        }
    }
    render(){
        if(this.props.user !== ""){
           return <Redirect to='/' />
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
        }
        return(
            <div className="container myBody " style={{minHeight:"600px"}}>
                    <div className="row justify-content-sm-center ml-auto mr-auto mt-3">
                        
                        <form className="border mb-3" style={{padding:"20px", borderRadius:"5%"}} ref="formLogin">
                            <fieldset>
                                
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Username</label>
                                    <div className="col-sm-9">
                                    <input type="text" ref="username" className="form-control" id="inputUsername" placeholder="Username" required autoFocus/>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                    <input type="password" ref="password" className="form-control" id="inputPassword" placeholder="Password" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                    <input type="email" ref="email" className="form-control" id="inputEmail" placeholder="Email@mail.com" required />
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Phone</label>
                                    <div className="col-sm-9">
                                    <input type="phone" ref="phone" className="form-control" id="inputPhone" placeholder="Ex: 0857xxxxxxxx" required />
                                    </div>
                                </div>
                                
                                <div className="form-group row">
<<<<<<< HEAD
                                    <div className="col-12" style={{textAlign:"center"}}>
                                        {this.renderLoaderOrBtn()}
                                        {this.renderErrorMessage()}
=======
                                    <div className="col-12">
                                    {this.renderLoadingOrBtn()}
                                    {this.renderErrorMessege()}
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                    </div>
                                        
                                </div>
                                <div className="btn my-auto"><p>Already have Account? <Link to="/login" className="border-bottom">Login</Link></p></div>
                                
                            </fieldset>
                        </form>
                        
                    </div>                
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        username : state.user.username,
        loading : state.user.loading,
        error : state.user.error,
    }
}

export default connect(mapStateToProps, {userRegister})(Register)
=======
        user : state.user.username,
        loading : state.user.loading,
        error : state.user.error
    }
} 

export default connect(mapStateToProps,{userRegister})(Register)
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
