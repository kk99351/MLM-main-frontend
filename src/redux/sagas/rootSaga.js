import * as ACTION from '@/constants/constants';
import { takeLatest } from 'redux-saga/effects';
import authSaga from './authSaga';
import productSaga from './productSaga';
import miscSaga from './miscSaga';

function* rootSaga() {
  yield takeLatest([
    ACTION.SEND_OTP,
    ACTION.RESEND_OTP,
    ACTION.SIGNIN,
    ACTION.SIGNOUT,
    ACTION.SIGNIN_SUCCESS
  ], authSaga);
  yield takeLatest([
    ACTION.ADD_PRODUCT,
    ACTION.SEARCH_PRODUCT,
    ACTION.REMOVE_PRODUCT,
    ACTION.EDIT_PRODUCT,
    ACTION.GET_PRODUCTS
  ], productSaga);
  yield takeLatest([
    ACTION.GET_WALLET_BALANCE,
    ACTION.UPDATE_WALLET_BALANCE,
    ACTION.ADD_ORDERS,
    ACTION.GET_ORDERS,
    ACTION.UPDATE_BASKET,
  ], miscSaga)
}

export default rootSaga;
