import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductButton,
} from "./ProductsElements";

const Products = ({ heading, data }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [forums, setForums] = useState([]);

  useEffect(() => {
    (async () => {
      const forumdata = await axios.get("/api/workout");
      setForums(forumdata.data);
      console.log(forumdata.data);
    })();
  }, []);

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {forums.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg
                src="https://images.unsplash.com/photo-1614928917396-a458c0c9dfb0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt={product.alt}
              />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductButton
                  onClick={() =>
                    (window.location.href = "/workout/" + product._id)
                  }
                >
                  Start Workout
                </ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
