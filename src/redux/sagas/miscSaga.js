/* eslint-disable indent */
import {
  GET_WALLET_BALANCE,
  UPDATE_WALLET_BALANCE,
  ADD_ORDERS,
  GET_ORDERS,
  UPDATE_BASKET
} from '@/constants/constants';

import { ADMIN_PRODUCTS } from '@/constants/routes';
import { displayActionMessage } from '@/helpers/utils';
import {
  all, call, put, select
} from 'redux-saga/effects';
import { setLoading, setRequestStatus } from '@/redux/actions/miscActions';
import { history } from '@/routers/AppRouter';
import firebase from '@/services/firebase';
import {

} from '../actions/productActions';
import { walletBalance, walletDeduct } from '@/services/API/misc';
import { setWalletBalance } from '@/redux/actions/miscActions';
import { clearBasket } from '@/redux/actions/basketActions';
import { resetCheckout } from '@/redux/actions/checkoutActions';
import { setOrders } from '@/redux/actions/miscActions';
import { orderRegister } from '@/services/API/misc';
import { addOrders } from '@/redux/actions/miscActions';
import { getOrders } from '@/services/API/misc';

function* initRequest() {
  yield put(setLoading(true));
  yield put(setRequestStatus(null));
}

function* handleError(e) {
  yield put(setLoading(false));
  yield put(setRequestStatus(e?.message || 'Failed to fetch products'));
  console.log('ERROR: ', e);
}

function* handleAction(location, message, status) {
  if (location) yield call(history.push, location);
  yield call(displayActionMessage, message, status);
}

function* miscSaga({type, payload}) {
  switch(type){
    case GET_WALLET_BALANCE:
      try{
        yield initRequest();
        const response = yield call(walletBalance, payload)
        if (response.status === false){
          throw Error(response.msg)
        }
        yield put(setWalletBalance(response.data.wallet));
        yield put(setRequestStatus(''));
        yield put(setLoading(false));
      }
      catch(e){
        yield handleError(e);
      }
      break;
    case UPDATE_WALLET_BALANCE:
      try{
        yield initRequest();
        const response = yield call(walletDeduct, {id: payload.id, amount: payload.amount})
        if (response.status === false){
          throw Error(response.msg)
        }
        const orderItemList = payload.basket.map((item) => {
          return {
            quantity: item.quantity,
            product: item.id,
            size: item.selectedSize,
            color: item.selectedColor
          }
        })
        const orders = {
          orderItems: orderItemList,
          shippingAddress: payload.shipping.streetLine,
          city: payload.shipping.city,
          zip: payload.shipping.pincode,
          state: payload.shipping.state,
          phone: payload.shipping.mobile,
          email: payload.shipping.email,
          status: "created",
          user: payload.id,
        }
        yield put(setWalletBalance(response.data.wallet));
        yield put(clearBasket())
        yield put(resetCheckout())
        yield put(setRequestStatus(''));
        yield put(setLoading(false));
        yield put(addOrders(orders))
      }
      catch(e){
        yield handleError(e);
      }
      break;
    case ADD_ORDERS:
      try{
        yield initRequest()
        const response = yield call(orderRegister, payload);
        if (response.status === false){
          throw Error(response.msg)
        }
        yield put(setRequestStatus(''));
        yield put(setLoading(false));
      }
      catch(e){
        yield handleError(e);
      }
      break;
    case GET_ORDERS:
      try{
        yield initRequest();
        const response = yield call(getOrders, payload)
        if (response.status === false){
          throw Error(response.msg)
        }
        yield put(setOrders(response.data));
        yield put(setRequestStatus(''));
        yield put(setLoading(false));
      }
      catch(e){
        yield handleError(e);
      }
      break;
    case UPDATE_BASKET:
    default: {
      throw new Error(`Unexpected action type ${type}`);
    }
  }
}

export default miscSaga

