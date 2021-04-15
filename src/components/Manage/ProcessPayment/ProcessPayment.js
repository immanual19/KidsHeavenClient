import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
//import MyCheckoutForm from '../MyCheckoutForm/MyCheckoutForm';
import SimpleCardForm from '../MyCheckoutForm/SimpleCardForm';
//import SplitForm from '../MyCheckoutForm/SplitForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe('pk_test_51Ie0fPEQ5QOOV20wRI0DTelwjySMWQfeDXrXCESrVc0hGXNYMAzxTVmprNqflkGKLUEc0MhnP9Ki9KClaja3qSnz00doqK8Nm7');

const ProcessPayment= () => {
  return (
    <Elements stripe={stripePromise}>
      <SimpleCardForm></SimpleCardForm>
    </Elements>
  );
};

export default ProcessPayment;