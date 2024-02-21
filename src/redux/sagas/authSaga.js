import {
  SIGNIN,
  SIGNOUT, SEND_OTP, RESEND_OTP ,SIGNIN_SUCCESS
} from '@/constants/constants';
import { SIGNIN as ROUTE_SIGNIN } from '@/constants/routes';
import defaultAvatar from '@/images/defaultAvatar.jpg';
import defaultBanner from '@/images/defaultBanner.jpg';
import { call, put } from 'redux-saga/effects';
import { signInSuccess, signOutSuccess } from '@/redux/actions/authActions';
import { clearBasket, setBasketItems } from '@/redux/actions/basketActions';
import { resetCheckout } from '@/redux/actions/checkoutActions';
import { resetFilter } from '@/redux/actions/filterActions';
import { setAuthenticating, setAuthStatus } from '@/redux/actions/miscActions';
import { clearProfile, setProfile } from '@/redux/actions/profileActions';
import { history } from '@/routers/AppRouter';
import firebase from '@/services/firebase';
import { onAuthStateSuccess } from '@/redux/actions/authActions';
import {getLogin, getOTP, getProfile, resendOTP} from '@/services/API/users';

function* handleError(e) {
  const obj = { success: false, type: 'auth' };
  yield put(setAuthenticating(false));

  yield put(setAuthStatus({ ...obj, message: e }));

  // switch (e.code) {
  //   case 'auth/network-request-failed':
  //     yield put(setAuthStatus({ ...obj, message: 'Network error has occured. Please try again.' }));
  //     break;
  //   case 'auth/email-already-in-use':
  //     yield put(setAuthStatus({ ...obj, message: 'Email is already in use. Please use another email' }));
  //     break;
  //   case 'auth/wrong-password':
  //     yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
  //     break;
  //   case 'auth/user-not-found':
  //     yield put(setAuthStatus({ ...obj, message: 'Incorrect email or password' }));
  //     break;
  //   case 'auth/reset-password-error':
  //     yield put(setAuthStatus({ ...obj, message: 'Failed to send password reset email. Did you type your email correctly?' }));
  //     break;
  //   default:
  //     yield put(setAuthStatus({ ...obj, message: e.message }));
  //     break;
  // }
}


function* initRequest() {
  yield put(setAuthenticating());
  yield put(setAuthStatus({}));
}

function* authSaga({ type, payload }) {
  switch (type) {
    case SIGNIN:
      try {
        yield put(setAuthenticating(true));
        let message = 'Successfully signed in. Redirecting...'
        let success = true
        const response = yield call(getLogin, payload.mobile, payload.otp, payload.orderId)
        if (response.status === false){
          success = false
          message = response.msg
        }
        else{
          yield put(setAuthStatus({
            success,
            type: 'auth',
            orderId: payload.orderId,
            message
          }));
          yield put(setAuthenticating(false));
          yield put(signInSuccess({
            id: response.data.userId,
            email: response.data.userEmail,
            mobile: response.data.userMobile,
            isAdmin: response.data.isAdmin,
            token: response.data.token,
            role: 'USER'
          }))
        }
        yield put(setAuthStatus({
          success,
          type: 'auth',
          orderId: payload.orderId,
          message
        }));
        yield put(setAuthenticating(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    case SEND_OTP:
      try{
        yield initRequest();
        const response = yield call(getOTP, payload.mobile);
        if (response.status === false){
          throw response.msg
        }
        yield put(setAuthStatus(
          { success: true, 
            type: 'auth',
            orderId: response.data.orderId,
            message: 'OTP Send Successfully!' 
          }));
        yield put(setAuthenticating(false));
      } catch (e) {
        yield handleError(e);
      }
      break;
    case RESEND_OTP:
      try{
        yield put(setAuthenticating(true));
        const response = yield call(resendOTP, payload.orderId);
        let message = "OTP Send Successfully!";
        let success = true
        if (response.status === false){
          message = response.msg
          success = false
        }
        yield put(setAuthStatus(
          { success, 
            type: 'auth',
            orderId: payload.orderId,
            message 
          }));
        yield put(setAuthenticating(false));
      } catch(e){
        yield handleError(e)
      }
      break;
    case SIGNIN_SUCCESS:
      try{
        let response = yield call(getProfile,payload.id);
        if (response.status === false){
          throw response.msg
        }
        yield put(setProfile({
          fullname: response.data.name,
          avatar: defaultAvatar,
          banner: defaultBanner,
          email: response.data.email,
          address: response.data.address,
          basket: [],
          mobile: response.data.mobile,
          role: 'USER',
          dateJoined: response.data.dateJoined
        }))
        yield put(setBasketItems([]))
      } catch (e){
        yield handleError(e);
      }
      break;
    // case SIGNIN_WITH_GOOGLE:
    //   try {
    //     yield initRequest();
    //     yield call(firebase.signInWithGoogle);
    //   } catch (e) {
    //     yield handleError(e);
    //   }
    //   break;
    // case SIGNIN_WITH_FACEBOOK:
    //   try {
    //     yield initRequest();
    //     yield call(firebase.signInWithFacebook);
    //   } catch (e) {
    //     yield handleError(e);
    //   }
    //   break;
    // case SIGNIN_WITH_GITHUB:
    //   try {
    //     yield initRequest();
    //     yield call(firebase.signInWithGithub);
    //   } catch (e) {
    //     yield handleError(e);
    //   }
    //   break;
    // case SIGNUP:
    //   try {
    //     yield initRequest();

    //     const ref = yield call(firebase.createAccount, payload.email, payload.password);
    //     const fullname = payload.fullname.split(' ').map((name) => name[0].toUpperCase().concat(name.substring(1))).join(' ');
    //     const user = {
    //       fullname,
    //       avatar: defaultAvatar,
    //       banner: defaultBanner,
    //       email: payload.email,
    //       address: '',
    //       basket: [],
    //       mobile: { data: {} },
    //       role: 'USER',
    //       dateJoined: ref.user.metadata.creationTime || new Date().getTime()
    //     };

    //     yield call(firebase.addUser, ref.user.uid, user);
    //     yield put(setProfile(user));
    //     yield put(setAuthenticating(false));
    //   } catch (e) {
    //     yield handleError(e);
    //   }
    //   break;
    case SIGNOUT: {
      try {
        yield initRequest();
        yield call(firebase.signOut);
        yield put(clearBasket());
        yield put(clearProfile());
        yield put(resetFilter());
        yield put(resetCheckout());
        yield put(signOutSuccess());
        yield put(setAuthenticating(false));
        yield call(history.push, ROUTE_SIGNIN);
      } catch (e) {
        console.log(e);
      }
      break;
    }
    // case RESET_PASSWORD: {
    //   try {
    //     yield initRequest();
    //     yield call(firebase.passwordReset, payload);
    //     yield put(setAuthStatus({
    //       success: true,
    //       type: 'reset',
    //       message: 'Password reset email has been sent to your provided email.'
    //     }));
    //     yield put(setAuthenticating(false));
    //   } catch (e) {
    //     handleError({ code: 'auth/reset-password-error' });
    //   }
    //   break;
    // }
    // case ON_AUTHSTATE_SUCCESS: {
    //   const snapshot = yield call(firebase.getUser, payload.uid);

    //   if (snapshot.data()) { // if user exists in database
    //     const user = snapshot.data();

    //     yield put(setProfile(user));
    //     yield put(setBasketItems(user.basket));
    //     yield put(setBasketItems(user.basket));
    //     yield put(signInSuccess({
    //       id: payload.uid,
    //       role: user.role,
    //       provider: payload.providerData[0].providerId
    //     }));
    //   } else if (payload.providerData[0].providerId !== 'password' && !snapshot.data()) {
    //     // add the user if auth provider is not password
    //     const user = {
    //       fullname: payload.displayName ? payload.displayName : 'User',
    //       avatar: payload.photoURL ? payload.photoURL : defaultAvatar,
    //       banner: defaultBanner,
    //       email: payload.email,
    //       address: '',
    //       basket: [],
    //       mobile: { data: {} },
    //       role: 'USER',
    //       dateJoined: payload.metadata.creationTime
    //     };
    //     yield call(firebase.addUser, payload.uid, user);
    //     yield put(setProfile(user));
    //     yield put(signInSuccess({
    //       id: payload.uid,
    //       role: user.role,
    //       provider: payload.providerData[0].providerId
    //     }));
    //   }

    //   yield put(setAuthStatus({
    //     success: true,
    //     type: 'auth',
    //     isError: false,
    //     message: 'Successfully signed in. Redirecting...'
    //   }));
    //   yield put(setAuthenticating(false));
    //   break;
    // }
    // case ON_AUTHSTATE_FAIL: {
    //   yield put(clearProfile());
    //   yield put(signOutSuccess());
    //   break;
    // }
    // case SET_AUTH_PERSISTENCE: {
    //   try {
    //     yield call(firebase.setAuthPersistence);
    //   } catch (e) {
    //     console.log(e);
    //   }
    //   break;
    // }
    default: {
      throw new Error('Unexpected Action Type.');
    }
  }
}

export default authSaga;
