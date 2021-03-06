import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement
} from "@stripe/react-stripe-js";
import { Button } from "@material-ui/core";



const useOptions = () => {

  const options = useMemo(
    () => ({
      style: {
        base: {
          
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#9e2146"
        }
      }
    }),
    []
  );

  return options;
};

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError,setPaymentError]=useState(null);
  const [paymentSuccess,setPaymentSuccess]=useState(null);
  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    if(error){
        setPaymentError(error.message);
        setPaymentSuccess(null);   
    }
    else{
        setPaymentSuccess(paymentMethod.id);
        setPaymentError(null);
        const paymentInfo=JSON.parse(localStorage.getItem('paymentInfo'));
        paymentInfo.cardInfo=paymentMethod;
        paymentInfo.date=new Date().toDateString();
        localStorage.setItem('paymentInfo',JSON.stringify(paymentInfo));

        fetch('https://tranquil-citadel-82136.herokuapp.com/postPaymentInfo',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(paymentInfo)
        })
        .then(response=>response.json())
        .then(data=>{
          if(data){
            alert('Payment Done Successfully');
            window.location.reload();
          }
          else{
            alert('Error. Payment Could not be done');
          }
        })

    }
    
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        Expiration date
        <CardExpiryElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
      <label>
        CVC
        <CardCvcElement
          options={options}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <br/>
          <br/>
      <Button type="submit" disabled={!stripe} variant="contained" color="secondary">
  Pay
</Button>
{
  paymentError && <p>{paymentError}</p>
}
{
  paymentSuccess && <p>Payment Successfully Done</p>
}
      <br/>
    </form>
  );
};

export default SimpleCardForm;