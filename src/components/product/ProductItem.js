import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";

const ProductItem = ({ product, size }) => {
  const { addCartItem } = useContext(CartContext);

  //把商品加入購物車
  const handleClick = e => {
    e.preventDefault();
    addCartItem(product);
  };
  return (
    <div className="product-item">
      <Card border="dark" style={{ width: size }}>
        <Card.Body>
          <Card.Img variant="top" src={product.img} className="mb-2" />
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.subtitle}</Card.Text>
          <Button onClick={handleClick} variant="outline-danger">
            加入購物車
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductItem;
