import axios from 'axios'
import {urlApi} from './../support/urlApi'
import cookie from 'universal-cookie'

const objCookie = new cookie()
<<<<<<< HEAD

//LOGIN
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
=======
export const onLogin = (paramUsername,password) => { 
    return(dispatch)=>{
        // INI UNTUK MENGUBAH LOADING MENJADI TRUE
        dispatch({
            type: 'LOADING',
        })

        // GET DATA DARI FAKE API JSON SERVER
        axios.get(urlApi + '/users',{
            params:{username :paramUsername,
                    password}})
        
        // KALO BERHASIL NGE GET, DIA MASUK THEN
        .then((res) => {
            console.log(res)

        // IF USERNAME DAN PASSWORD SESUAI MAKA RES.DATA ADA ISINYA
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
            if(res.data.length > 0){
                dispatch(
                    {
                        type : 'LOGIN_SUCCESS',
                        payload : res.data[0].username
                    }
                )
<<<<<<< HEAD
            }
            else {
=======
            }else{
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
                dispatch({
                    type : 'USER_NOT_FOUND',
                })
            }
            
<<<<<<< HEAD
            
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
=======
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
   
}


export const keepLogin = (cookie) => {
    return(dispatch) => {
        axios.get(urlApi + '/users',{params : {username : cookie}})
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'LOGIN_SUCCESS',
                    payload : res.data[0].username
                })
            }
        })
        .catch((err) => console.log(err))
    }
<<<<<<< HEAD
}
=======
} 
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591


export const resetUser = () => {
    return {
<<<<<<< HEAD
        type : 'RESET_USER',
    }
}


//REGISTER

export const userRegister = (a,b,c,d) => {
=======
        type : 'RESET_USER'
    }
}

export const userRegister = (a,b,c,d) => { // userRegister('fikri')
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
    return(dispatch)=>{
        dispatch({
            type : 'LOADING'
        })
        var newData = {username : a, password : b, email : c, phone : d}
<<<<<<< HEAD
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
                    payload : a
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
=======
        // Mengecek Username availablity

        axios.get(urlApi +'/users?username=' + a)
        .then((res) => {
            if(res.data.length > 0){
                dispatch({
                    type : 'USERNAME_NOT_AVAILABLE'
                })
            }
            else{
                axios.post(urlApi +'/users',newData)
                .then((res) => dispatch({
                    type : 'LOGIN_SUCCESS',
                    //Mengirim Payload dalam bentuk Object
                    //payload : { username : newData.username, id : res.data.id, email : c} 
                    payload : a
                },
                    // Parameter Ketiga agar cookie bisa diakses di semua komponen
                    objCookie.set('userData',a,{path : '/'}),
                ))
                .catch((err) => console.log(err))
            }
        })
        .catch((err) => {
            dispatch({
                type : 'SYSTEM_ERROR'
            })
        })
    }
}
userRegister('Fikri','123','fikri@gmail.com','0812381234')




>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
