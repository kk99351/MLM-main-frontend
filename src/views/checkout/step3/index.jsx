import { CHECKOUT_STEP_1 } from '@/constants/routes';
import { Form, Formik } from 'formik';
import { displayActionMessage } from '@/helpers/utils';
import { useDocumentTitle, useScrollTop } from '@/hooks';
import PropType from 'prop-types';
import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as Yup from 'yup';
import { StepTracker } from '../components';
import withCheckout from '../hoc/withCheckout';
import WalletPayment from './WalletPayment';
import Total from './Total';
import { updateWalletBalance } from '@/redux/actions/miscActions';
import { useDispatch } from 'react-redux';
import { getWalletBalance } from '@/redux/actions/miscActions';

const FormSchema = Yup.object().shape({
  type: Yup.string().required('Please select paymend mode')
});
const Payment = ({ shipping, payment, subtotal, profile, basket, id, walletBalance }) => {
  useDocumentTitle('Check Out Final Step | EarthBound');
  useScrollTop();

  const dispatch = useDispatch();

  const initFormikValues = {
    type: payment.type || 'wallet'
  };

  useEffect(() => {
    dispatch(getWalletBalance({id}))
  },[])

  const onConfirm = () => {
    dispatch(updateWalletBalance({id,amount: subtotal, shipping, basket}))
  };

  if (!shipping || !shipping.isDone) {
    return <Redirect to={CHECKOUT_STEP_1} />;
  }
  return (
    <div className="checkout">
      <StepTracker current={3} />
      <Formik
        initialValues={initFormikValues}
        validateOnChange
        validationSchema={FormSchema}
        onSubmit={onConfirm}
      >
        {() => (
          <Form className="checkout-step-3">
            <WalletPayment walletBalance={walletBalance}/>
            <Total
              isInternational={shipping.isInternational}
              subtotal={subtotal}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

Payment.propTypes = {
  shipping: PropType.shape({
    isDone: PropType.bool,
    isInternational: PropType.bool
  }).isRequired,
  payment: PropType.shape({
    name: PropType.string,
    cardnumber: PropType.string,
    expiry: PropType.string,
    ccv: PropType.string,
    type: PropType.string
  }).isRequired,
  subtotal: PropType.number.isRequired
};

export default withCheckout(Payment);
