import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgxiBDjVWneoJFlKe4RCE4NK5NxePb45FvMUyblAVi7BVVXhuTbX7MBi0Y6lsUNko0oFlE1jQpWucyjL0DqaxW500zouOgv6y';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
