import "./PlansPage.css";
import { useEffect, useState } from "react";
import db from "../../utils/firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { loadStripe } from "@stripe/stripe-js";
function PlansPage() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const products = {};
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log("products", products);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });
    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51O2vwlH0NDIMRLm4nZs3GwFNVb5gidT4tjnUhSwLrZKuCK3u91XYEl071gsELEoXYmd8TIKEjfQPo6dxWLlkoM6R00JMW31Ozi"
        );
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="plansPage">
      {Object.entries(products).map(([productId, productData]) => {
        return (
          <>
            <div className="plansPage-plan">
              <div className="plansPage-info">
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>

              <button onClick={() => loadCheckout(productData.prices.priceId)}>
                Subscribe
              </button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default PlansPage;
