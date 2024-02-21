import {
  IS_AUTHENTICATING, LOADING, SET_AUTH_STATUS, SET_REQUEST_STATUS,
  GET_WALLET_BALANCE,
  UPDATE_WALLET_BALANCE,
  SET_WALLET_BALANCE,
  ADD_ORDERS,
  SET_ORDERS,
  GET_ORDERS,
  UPDATE_BASKET
} from '@/constants/constants';

export const setLoading = (bool = true) => ({
  type: LOADING,
  payload: bool
});

export const setAuthenticating = (bool = true) => ({
  type: IS_AUTHENTICATING,
  payload: bool
});

export const setRequestStatus = (status) => ({
  type: SET_REQUEST_STATUS,
  payload: status
});


export const setAuthStatus = (status = null) => ({
  type: SET_AUTH_STATUS,
  payload: status
});

export const updateBasket = (payload) => ({
  type: UPDATE_BASKET,
  payload: payload
});

export const setWalletBalance = (payload) => ({
  type: SET_WALLET_BALANCE,
  payload: payload
});

export const getWalletBalance = (payload) => ({
  type: GET_WALLET_BALANCE,
  payload: payload
})

export const updateWalletBalance = (payload) => ({
  type: UPDATE_WALLET_BALANCE,
  payload: payload
});

export const addOrders = (payload) => ({
  type: ADD_ORDERS,
  payload: payload
});

export const setOrders = (payload) => ({
  type: SET_ORDERS,
  payload: payload
});

export const getOrders = (payload) => ({
  type: GET_ORDERS,
  payload: payload
});