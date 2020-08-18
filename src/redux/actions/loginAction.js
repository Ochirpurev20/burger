import axios from 'axios'

export const loginUser = (email, password) => {
    return  function(dispatch) {
        dispatch(loginUserStart())

        const data = {
            email,
            password,
            returnSecureToken: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9WRHr4-PGvFf6QvWIRxP0K9kC0T6Jvt0', 
        data).then(res => {
            dispatch(loginUserSuccess(res.data))
        }).catch(err => {
           dispatch(loginUserError(err))
        })
    }
}
export const loginUserStart = () => {
    return {
        type: "LOGIN_USER_START",

    }
}
export const loginUserSuccess = (resData) => {
    return {
        type: "LOGIN_USER_SUCCESS",
        resData
        
    }
}
export const loginUserError = (err) => {
    return {
        type: "LOGIN_USER_ERROR",
        err
        
    }
}
