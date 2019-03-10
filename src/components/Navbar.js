import React,  { Component } from 'react';
<<<<<<< HEAD
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {resetUser} from './../1.actions'
import cookie from 'universal-cookie'

const objCookie = new cookie()
=======
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import terserah from 'universal-cookie'
import { resetUser } from './../1.actions'
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591

const objCookie = new terserah()
class HeaderKu extends Component{

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
      };
    }
    toggle() {
       this.setState({
         isOpen: !this.state.isOpen
       });
    }

<<<<<<< HEAD
    onBtnLogOut = () => {
=======
    onBtnLogout = () => {
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
        objCookie.remove('userData')
        this.props.resetUser()
    }

<<<<<<< HEAD
    render(){ 
            if(this.props.username === ""){
=======
    render(){
            if(this.props.bebas === "")
            {
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                return(
                    <div style={{marginBottom:"75px"}}>
                        <Navbar color="light" light expand="md" fixed="top">
                            <NavbarBrand className="ml-2" ><Link to='/'> <img src="http://www.logospng.com/images/43/letter-f-bootstrap-logos-43177.png" alt="brand" width="30px" /> </Link> </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                    <div className="input-group border-right" style={{width:"350px"}}>
                                        <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
                                        <div className="input-group-append mr-2">
                                            <button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
                                        </div>
                                    </div> 
                                    </NavItem>
                                    
                                    <NavItem>
<<<<<<< HEAD
                                        <Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Register</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Login</NavLink></Link>
=======
                                        <Link to="/register"><NavLink className="btn btn-default border-secondary mr-1" style={{fontSize:"14px"}}><i className="fas fa-user-plus" /> Daftar</NavLink></Link>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i className="fas fa-sign-in-alt" /> Masuk </NavLink></Link>
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
<<<<<<< HEAD
                )
=======
                );
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
            } else {
                return(
                    <div style={{marginBottom:"75px"}}>
                        <Navbar color="light" light expand="md" fixed="top">
                            <NavbarBrand className="ml-2" ><Link to='/'> <img src="http://www.logospng.com/images/43/letter-f-bootstrap-logos-43177.png" alt="brand" width="30px" /> </Link> </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                    <div className="input-group border-right" style={{width:"350px"}}>
                                        <input type="text" ref="searchBook" className="form-control" placeholder="Masukkan kata kunci ... " />
                                        <div className="input-group-append mr-2">
                                            <button className="btn border-secondary" type="button" id="button-addon2"><i className="fas fa-search" /></button>
                                        </div>
                                    </div> 
                                    </NavItem>
                                    
                                    <NavItem>
<<<<<<< HEAD
                                        <NavLink> Hello, {this.props.username} </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/products"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i class="fas fa-shopping-cart"></i> Cart</NavLink></Link>
=======
                                        <NavLink>Hi , {this.props.bebas}</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <Link to="/login"><NavLink className="btn btn-default border-primary" style={{fontSize:"14px"}}><i class="fas fa-shopping-cart"></i> Cart </NavLink></Link>
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                    </NavItem>
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                        Menu
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                        <DropdownItem>
<<<<<<< HEAD
                                            Transaction History
=======
                                            Histori Transaksi
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                        </DropdownItem>
                                        <DropdownItem>
                                            Edit Profile
                                        </DropdownItem>
                                        <DropdownItem divider />
<<<<<<< HEAD
                                        <DropdownItem onClick={this.onBtnLogOut}>
                                            Logout
=======
                                        <DropdownItem onClick={this.onBtnLogout}>
                                            Log Out
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                                        </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </div>
                );
            }
<<<<<<< HEAD
=======
            
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
        }
}

const mapStateToProps = (state) => {
    return {
<<<<<<< HEAD
        username : state.user.username
=======
        bebas : state.user.username
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
    }
}



export default connect(mapStateToProps,{resetUser})(HeaderKu);