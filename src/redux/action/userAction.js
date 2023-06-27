export const FETCH_USER_LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const doLogin = (res) => {
  return {
    type: FETCH_USER_LOGIN_SUCCESS,
    payload: res,
  };
};
