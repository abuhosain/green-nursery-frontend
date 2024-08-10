import React, { useState } from "react";
import { Card, Button, Rate } from "antd";
import { IProduct } from "../../../../types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/feature/cart/cartSlice";
 

interface ProductProps {
  item: IProduct;
}

const ProductCard: React.FC<ProductProps> = ({ item }) => {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: item._id,
        name: item.title,
        price: item.price,
        quantity: 1,
      })
    );
    setAddedToCart(true);
  };

  return (
    <div className="p-4">
      <Card
        hoverable
        className="w-full max-w-xs mx-auto" // Full width and max width for responsiveness
        cover={
          <img
            alt={item.title}
            src={
              item?.image
            }
            className="h-48 w-full object-cover" // Responsive image
          />
        }
      >
        <Link to={`/products/${item._id}`}>
          <Card.Meta title={item.title} description={`$${item.price}`} />
        </Link>
        <div className="mt-4">
          <Rate disabled defaultValue={item.rating} />
        </div>
        <Button
          type="primary"
          className="mt-4 w-full"
          onClick={handleAddToCart}
          disabled={addedToCart}
        >
          {addedToCart ? "Added" : "Add to Cart"}
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
