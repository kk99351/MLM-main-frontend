/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormikContext } from 'formik';
import React from 'react';

const WalletPayment = ({walletBalance}) => {
  const { values, setValues } = useFormikContext();
  return (
    <div className={`checkout-fieldset-collapse ${values.type === 'wallet' ? 'is-selected-payment' : ''}`}>
      <div className="checkout-field margin-0">
        <div className="checkout-checkbox-field">
          <input
            checked={values.type === 'wallet'}
            id="modeWallet"
            name="type"
            onChange={(e) => {
              if (e.target.checked) {
                setValues({ ...values, type: 'wallet' });
              }
            }}
            type="radio"
          />
          <label
            className="d-flex w-100"
            htmlFor="modeWallet"
          >
            <div className="d-flex-grow-1 margin-left-s">
              <h4 className="margin-0">Wallet</h4>
              <span className="text-subtle d-block margin-top-s">
                Available Balance: ${walletBalance}.
              </span>
            </div>
            <div className="payment-img payment-img-wallet" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default WalletPayment;
