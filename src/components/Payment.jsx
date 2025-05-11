import React, { useEffect } from 'react';

const Payment = ({ amount }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = async () => {
    const Razorpay = window.Razorpay;
    try {
      // Create order on your backend
      const response = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount,
          currency: 'INR',
        }),
      });

      const { order } = await response.json();

      // Initialize Razorpay options
      const options = {
        key: "rzp_test_9hpH9KckIYfsTv",
        amount: order.amount,
        currency: order.currency,
        name: "Your Company Name",
        description: "Test Transaction",
        order_id: order.id,
        handler: async (res) => {
          try {
            // Verify payment on your backend
            const response = await fetch('http://localhost:5000/api/payment/verify-payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: res.razorpay_order_id,
                razorpay_payment_id: res.razorpay_payment_id,
                razorpay_signature: res.razorpay_signature,
              }),
            });

            const result = await response.json();
            if (result.success) {
              alert('Payment successful!');
              // Handle successful payment (e.g., update UI, redirect, etc.)
            }
          } catch (error) {
            console.error('Error verifying payment:', error);
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Could not initiate payment');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 font-medium uppercase tracking-wider text-sm transition-all duration-300 bg-black text-white hover:shadow-md w-full"
    >
      Pay ₹{amount}
    </button>
  );
};

export default Payment;
