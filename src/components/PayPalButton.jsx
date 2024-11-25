import React, { useEffect } from 'react';

const PayPalButton = ({ totalAmount, salesId }) => {
    useEffect(() => {
        // Dynamically load the PayPal SDK script
        if (!window.paypal) {
            const script = document.createElement('script');
            script.src = `https://www.paypal.com/sdk/js?client-id=AVI65tOWTkV-pNjU3etkZnwO-55p66QnYq2lZ_VSP7fO-DRTIoURD1Lc9_OukLPln_-gUTF74mIeQoks&currency=USD`;
            script.onload = () => setupPayPalButton();
            document.body.appendChild(script);
        } else {
            setupPayPalButton();
        }
    }, []);

    const setupPayPalButton = () => {
        window.paypal.Buttons({
            createOrder: (data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: totalAmount, // Amount to be paid
                            },
                        },
                    ],
                });
            },
            onApprove: (data, actions) => {
                return actions.order.capture().then((details) => {
                    alert(`Transaction completed by ${details.payer.name.given_name}`);

                    // Send payment data to the backend
                    fetch('http://localhost:8081/api/payment', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            payerId: details.payer.payer_id,
                            paymentStatus: 'Completed',
                            paymentDate: new Date(),
                            paymentMethod: 'PayPal',
                            paymentAmount: totalAmount,
                            salesId: salesId, // Send salesId to link the payment to the sale
                        }),
                    })
                        .then((response) => response.json())
                        .then((data) => {
                            console.log('Payment saved:', data);
                        })
                        .catch((error) => {
                            console.error('Error saving payment:', error);
                        });
                });
            },
            onError: (err) => {
                console.error('PayPal payment error:', err);
            },
        }).render('#paypal-button-container'); // Render PayPal button
    };

    return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
