import React from "react";
import { Card, Button, Rate } from "antd";
import { IProduct } from "../../../../types";
import { Link } from "react-router-dom";

interface ProductProps {
  item: IProduct;
}

const ProductCard: React.FC<ProductProps> = ({ item }) => {
  return (
    <div className="p-4">
      <Card
        hoverable
        className="w-full max-w-xs mx-auto"  // Full width and max width for responsiveness
        cover={
          <img
            alt={item.title}
            src={"https://media.istockphoto.com/id/1459952195/photo/beautiful-spring-garden-with-flowers-and-lawn-grass-3d-illustration.jpg?s=612x612&w=0&k=20&c=D0YvqhTZ6nUUQRU9ZUh7v7fV9sTVHmR1d8VbXhuP2eA="}
            className="h-48 w-full object-cover"  // Responsive image
          />
        }
      >
       <Link to={`/product/${item._id}`}> <Card.Meta title={item.title} description={`$${item.price}`} /></Link>
        <div className="mt-4">
          <Rate disabled defaultValue={item.rating} />
        </div>
        <Button
          type="primary"
          className="mt-4 w-full"
        >
          Add to Cart
        </Button>
      </Card>
    </div>
  );
};

export default ProductCard;
