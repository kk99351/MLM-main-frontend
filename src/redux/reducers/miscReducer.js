import {
  IS_AUTHENTICATING, LOADING,
  SET_AUTH_STATUS,
  SET_REQUEST_STATUS,
  SET_ORDERS,
  SET_WALLET_BALANCE
} from '@/constants/constants';

const initState = {
  loading: false,
  isAuthenticating: false,
  authStatus: null,
  requestStatus: null,
  walletBalance: null,
  orders: [],
  theme: 'light'
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case IS_AUTHENTICATING:
      return {
        ...state,
        isAuthenticating: action.payload
      };
    case SET_REQUEST_STATUS:
      return {
        ...state,
        requestStatus: action.payload
      };
    case SET_AUTH_STATUS:
      return {
        ...state,
        authStatus: action.payload
      };
    case SET_WALLET_BALANCE:
      return {
        ...state,
        walletBalance: action.payload
      };
    case SET_ORDERS:
      return {
        ...state,
        orders: action.payload
      };
    default:
      return state;
  }
};
