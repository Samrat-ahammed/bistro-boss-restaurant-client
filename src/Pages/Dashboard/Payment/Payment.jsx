import SectionTitle from "../../../Component/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutPayment from "./CheckoutPayment";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_payment_kye);
const Payment = () => {
  return (
    <div>
      <SectionTitle
        subtitle={"-------whats news-------"}
        title={"Payment"}
      ></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutPayment></CheckoutPayment>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
