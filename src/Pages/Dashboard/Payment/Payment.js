import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JwRcbEuuXH2az60N1GU8ANYg9eCoYEJfXtZd7POAgRYA1yUvQHy2qx8iPjk6OorwtmjZPhzXH7XVEwwwh30qhMo00X843wovm')

const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://dry-lowlands-49918.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [appointmentId])

    return (
        <div>
            <h2>Please Pay for: {appointment?.patientName} for {appointment?.serviceName}</h2>
            <h4>Pay ${appointment?.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
                    appointment={appointment}
                ></CheckoutForm>
            </Elements>}
        </div>
    );
};

export default Payment;

/*
    1. install stripe and stripe-react
    2. set publishable key
    3. Elements
    4. Checkout Form
    ----------------------------
    5. Create payment method
    6. server: create payment Intent api
    7. load client secret
    8. confirmedCard payment
    9. handle user error

*/