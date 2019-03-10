<<<<<<< HEAD
const INITIAL_STATE = {id : 0 , username : "", error: "", loading:false}
=======
const INITIAL_STATE = {id : 0, username : "",error : "",loading:false}
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591

export default (state=INITIAL_STATE,action) => {
    if(action.type === 'LOGIN_SUCCESS'){
        return {...INITIAL_STATE,username : action.payload}
<<<<<<< HEAD
    } else if (action.type === 'LOADING') {
        return{...INITIAL_STATE , loading : true}
    } else if (action.type === 'USER_NOT_FOUND'){
        return{...INITIAL_STATE , error : 'Username atau password salah'}
    }  else if (action.type === 'SERVER_ERROR'){
        return{...INITIAL_STATE , error : 'Server error. Try again later.'}
    } else if (action.type === 'RESET_USER'){
        return INITIAL_STATE
    } else if (action.type === 'USERNAME_NOT_AVAILABLE'){
        return {...INITIAL_STATE , error : 'Username not available'}
    }
      else {
        return state
    }
    
=======
    }else if(action.type === 'LOADING'){
        return{...INITIAL_STATE , loading : true}
    }else if(action.type === 'USER_NOT_FOUND'){
        return{...INITIAL_STATE , error : 'Username atau password salah'}
    }else if(action.type === 'SYSTEM_ERROR'){
        return {...INITIAL_STATE , error : 'System Error'}
    }else if(action.type === 'RESET_USER'){
        return INITIAL_STATE
    }else if(action.type === 'USERNAME_NOT_AVAILABLE'){
        return {...INITIAL_STATE, error : 'Username not available'}
    }
    else{
        return state
    }
>>>>>>> 55a1536218c0ace0162cd66ef781f06e02614591
}