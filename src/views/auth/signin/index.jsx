import { ArrowRightOutlined, LoadingOutlined } from '@ant-design/icons';
import { SocialLogin } from '@/components/common';
import { CustomInput } from '@/components/formik';
import { FORGOT_PASSWORD, SIGNUP } from '@/constants/routes';
import { Field, Form, Formik } from 'formik';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import PropType from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, sendOTP, resendOTP } from '@/redux/actions/authActions';
import { setAuthenticating, setAuthStatus } from '@/redux/actions/miscActions';
import img from '@/images/orange-woman-with-phone-and-shopping-bag.png'
import * as Yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const SignInSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile Number is required.')
    .matches(phoneRegExp, 'Mobile number is not valid')
    .min(10, "Mobile number digits can't be less than 10")
    .max(10, "Mobile number digits can't be more than 10"),
    
});

const otpVerifySchema = Yup.object().shape({
  otp: Yup.string()
  .required('OTP is required.')
  .matches(/^[0-9]+$/, "OTP is not valid")
  .min(6, 'Must be exactly 5 digits')
  .max(6, 'Must be exactly 5 digits')
})

// let timer;

const SignIn = ({ history }) => {
  const { authStatus, isAuthenticating } = useSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating
  }));
  const dispatch = useDispatch();
  // const [count,setCount] = useState(0)

  useScrollTop();
  useDocumentTitle('Sign In | EarthBound');

  useEffect(() => {
    dispatch(setAuthStatus(null));
    dispatch(setAuthenticating(false));
  }, []);

  const onSignUp = () => history.push(SIGNUP);

  const onSubmitForm = (form) => {
    if (authStatus?.orderId){
      dispatch(signIn(form.mobile, form.otp, authStatus.orderId));
    }
    else{
      // clearTimer()
      dispatch(sendOTP(form.mobile));
      // setTimer()
    }
  };

  // const timeIncrease = () => {
  //   setCount(count+1)
  // }

  const resendOTPHandler = () => {
    // clearTimer()
    dispatch(resendOTP(authStatus.orderId))
    // setTimer()
  };

  const onClickLink = (e) => {
    if (isAuthenticating) e.preventDefault();
  };

  // const setTimer = () => {
  //   timer = setInterval(() => {
  //     console.log(count)
  //     setCount(count+1)
  //   }, 1000)
  // }

  // const clearTimer = () => {
  //   clearInterval(timer)
  // }

  // useEffect(() => {
  //   console.log(count)
  //   if (count === 60){
      
  //     clearTimer()
  //   }
  // }, [count])
  

  return (
    <div className="auth-content">
      {authStatus?.success &&
        <div>
          <h3 className="toast-success auth-success">
            {authStatus.message}
          </h3>
        </div>
      }
      {
        authStatus?.success === false && (
          <div>
          <h3 className="text-center toast-error">
            {authStatus?.message}
          </h3>
          </div>
        )
      }
      
        <>
          <div className={`auth`}>
            <div>
              <img src={img} alt="" style={{maxHeight:'450px'}} />
            </div>
            <div className="auth-main">
              <div className="auth-wrapper">
                <Formik
                  initialValues={{
                    mobile: '',
                    otp: '',
                  }}
                  validateOnChange
                  validationSchema={!authStatus?.orderId? SignInSchema: otpVerifySchema}
                  onSubmit={onSubmitForm}
                >
                  {() => (
                    <Form>
                      <h3>Sign in to EarthBound</h3>
                      <div className="auth-field">
                        { 
                          !authStatus?.orderId?
                          (<Field
                          disabled={isAuthenticating}
                          name="mobile"
                          type="number"
                          label="Mobile Number"
                          placeholder="9122461897"
                          component={CustomInput}
                        />):
                        (<Field
                          disabled={isAuthenticating}
                          name="otp"
                          type="number"
                          label="OTP"
                          placeholder="123456"
                          component={CustomInput}
                        />)
                        }
                      </div>
                      <br />
                      <div className="auth-field auth-action">
                        {
                          authStatus?.orderId && 
                          <span
                          onClick={resendOTPHandler}
                          style={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            <span>Resend OTP </span>
                          </span>
                        }
                        <button
                          className="button auth-button"
                          disabled={isAuthenticating}
                          type="submit"
                        >
                          {isAuthenticating ? (!authStatus?.orderId? 'Sending OTP' : 'Loging') : (!authStatus?.orderId? 'Send OTP' : 'Login')}
                          &nbsp;
                          {isAuthenticating ? <LoadingOutlined /> : <ArrowRightOutlined />}
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="auth-message">
            <span className="auth-info">
              <strong>Don&apos;t have an account?</strong>
              <span> Contact Team</span>
            </span>
          </div>
        </>
    </div>
  );
};

SignIn.propTypes = {
  history: PropType.shape({
    push: PropType.func
  }).isRequired
};

export default SignIn;
