import axios from 'axios'

export const signupUser = (email, password) => {
    return  function(dispatch) {
        dispatch(signupUserStart())

        const data = {
            email,
            password,
            returnSecureToker: true
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9WRHr4-PGvFf6QvWIRxP0K9kC0T6Jvt0', 
        data).then(res => {
            dispatch(signupUserSuccess(res.data))
        }).catch(err => {
           dispatch(signupUserError(err))
        })
    }
}
export const signupUserStart = () => {
    return {
        type: "SIGNUP_USER_START",

    }
}
export const signupUserSuccess = (resData) => {
    return {
        type: "SIGNUP_USER_SUCCESS",
        resData
        
    }
}
export const signupUserError = (err) => {
    return {
        type: "SIGNUP_USER_ERROR",
        err
        
    }
}
export const logout = () => {
    return {
        type: "LOGOUT"            
    }
}
