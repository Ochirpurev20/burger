const initialState = {
  saving: false,
  fireError: null,
  token: null,
  userId: null,
  logginIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        fireError: action.err.response.data.error.message,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        fireError: action.err.response.data.error.message,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
      };
    default:
      return state;
  }
};

export default reducer;
