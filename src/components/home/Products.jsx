import { useState, useEffect } from "react";
import { auth, db, storage } from "../firebase";
import { collection, getDocs } from "@firebase/firestore";
import { ref, getDownloadURL } from "@firebase/storage";
import Product from "./Product";
import "./Products.css";

const Products = () => {
  const [productList2, setProductList2] = useState([]);

  const fetchData = async () => {
    const collectionRef = collection(db, "itemdetails");

    try {
      const snapshot = await getDocs(collectionRef);
      const productsData = [];

      for (const doc of snapshot.docs) {
        const data = doc.data();
        const imageRef = ref(storage, data.imageUrl);

        try {
          const imageUrl = await getDownloadURL(imageRef);

          console.log(data);
          productsData.push({
            name: data.itemName,
            description: data.itemShortDescription,
            price: data.startingPrice,
            time: data.endDate,
            image: imageUrl,
            owner: data.ItemOwner,
          });
        } catch (error) {
          console.error(
            `Error getting download URL for image: ${data.imageUrl}`,
            error
          );
        }
      }

      setProductList2(productsData);
    } catch (error) {
      console.error("Error fetching data from Firestore: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="products reset-styles">
      {productList2.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default Products;
