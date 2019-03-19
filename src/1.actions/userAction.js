import axios from 'axios'
import {urlApi} from './../support/urlApi'
import cookie from 'universal-cookie'

const objCookie = new cookie()

//LOGIN
//export const karena yang mau diexport lebih dari satu
//pake export default kalo yang diexport cuma satu

export const onLogin = (paramUsername,paramPassword) => {
    return(dispatch) => {
        //untuk mengubah loading menjadi true
        dispatch({
            type : 'LOADING',
        })
        //Get data dari fake api json server
        axios.get( urlApi + '/users',
        {params:{username :paramUsername, password:paramPassword}})
        
        //Kalo berhasil nge get, dia masuk then
        .then((res) => {
            console.log(res)
        //if username dan password sesuai maka res.data ada isinya
            if(res.data.length > 0){
                dispatch(
                    {
                        type : 'LOGIN_SUCCESS',
                        payload : 
                        { id : res.data[0].id ,
                         username : res.data[0].username ,
                         role : res.data[0].role
                        }
                    }
                )
            }
            else {
                dispatch({
                    type : 'USER_NOT_FOUND',
                })
            }
            
            
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type : 'SERVER_ERROR'
            })
        })
    }
    
}

export const keepLogin = (cookie) => {
    return(dispatch) => {
        axios.get( urlApi + '/users',{params : {username : cookie}})
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload :  
                        {username : res.data[0].username ,
                         role : res.data[0].role, id : res.data[0].id}

                })
            }
        })
        .catch((err) => console.log(err))
    }
}

export const cookieChecked = () => {
    return {
        type : 'COOKIE_CHECKED'
    }
}
export const resetUser = () => {
    return {
        type : 'RESET_USER',
    }
}


//REGISTER

export const userRegister = (a,b,c,d) => {
    return(dispatch)=>{
        dispatch({
            type : 'LOADING'
        })
        var newData = {username : a, password : b, email : c, phone : d, role : "user"}
        axios.get( urlApi + '/users?username=' + newData.username)
        .then((res) => {
            if(res.data.length > 0) {
                dispatch({
                    type : 'USERNAME_NOT_AVAILABLE'
                })
            } else {
                axios.post( urlApi + '/users',newData)
                .then((res)=> dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : {username : res.data.username ,
                            role : res.data.role}
                },
                    objCookie.set('userData',a,{path : '/'}) // path '/' agar cookienya diakses di semua components
                ))
                .catch((err)=> console.log(err))
            }
        })
        .catch((err) => {
            console.log(err)
            dispatch({
                type : 'SERVER_ERROR'
            })
        })
    }
}


export const loginWithGoogle = (email) => {
    return(dispatch) => {
        axios.get(urlApi + '/users?username=' + email)
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : res.data[0]
                },
                    objCookie.set('userData',email,{path : '/'}))
            } else {
                axios.post(urlApi + '/users' , {username : email, role : "user"})
                .then((res) => {
                    dispatch({
                        type : 'LOGIN_SUCCESS',
                        payload : res.data
                    },
                        objCookie.set('userData',email,{path : '/'}))
    
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const fnHitungCart = (cart) => {
    return {
        type : 'JUMLAH_CART',
        payload : cart
    }
}
