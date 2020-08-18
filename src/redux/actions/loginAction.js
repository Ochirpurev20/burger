import axios from "axios";

export const loginUser = (email, password) => {
  return function (dispatch) {
    dispatch(loginUserStart());

    const data = {
      email,
      password,
      returnSecureToken: true,
    };

    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9WRHr4-PGvFf6QvWIRxP0K9kC0T6Jvt0",
        data
      )
      .then((res) => {
        const token = res.data.idToken;
        const userId = res.data.localId;

        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        dispatch(loginUserSuccess(token, userId));
      })
      .catch((err) => {
        dispatch(loginUserError(err));
      });
  };
};
export const loginUserStart = () => {
  return {
    type: "LOGIN_USER_START",
  };
};
export const loginUserSuccess = (token, userId) => {
  return {
    type: "LOGIN_USER_SUCCESS",
    token,
    userId,
  };
};
export const loginUserError = (err) => {
  return {
    type: "LOGIN_USER_ERROR",
    err,
  };
};
