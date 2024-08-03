import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/feature/product/productApi";
import { Card, Button, Rate, Typography, Collapse, Spin } from "antd";
import image from "../../../assets/images/hero/hero2.webp";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/feature/cart/cartSlice";

const { Title, Text } = Typography;
const { Panel } = Collapse;

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);

  if (!id) {
    return <div className="text-center mt-10">No product ID provided</div>;
  }

  const { data, error, isLoading } = useGetProductByIdQuery(id);

  if (isLoading) {
    return (
      <div className="text-center mt-10">
        <Spin size="large" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-10">Error loading product details</div>
    );
  }

  const product = data?.data;

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product._id,
        name: product.title,
        price: product.price,
        quantity: 1,
      })
    );
    setAddedToCart(true);
  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      <Card
        className="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden"
        bordered={false}
      >
        <img
          className="w-full md:w-1/2 h-auto object-cover"
          src={image}
          alt={product.name}
        />
        <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-between p-6">
          <div>
            <Title level={1} className="text-green-700 text-3xl font-semibold">
              {product.title}
            </Title>
            <Text className="text-gray-700 text-lg mb-4">
              {product.description}
            </Text>
            <Title level={2} className="text-green-700 mb-4">
              ${product.price}
            </Title>
            <div className="mb-4 flex flex-col">
              <Text className="text-lg text-gray-800">
                <strong>Category:</strong> {product.category.name}
              </Text>
              <Text className="text-lg text-gray-800">
                <strong>Quantity:</strong> {product.quantity}
              </Text>
            </div>
            <div className="flex items-center mb-4">
              <Rate
                allowHalf
                disabled
                defaultValue={product.rating}
                className="mr-2"
              />
              <Text className="text-gray-700">{product.rating}</Text>
            </div>
          </div>
          <Button
            type="primary"
            className="bg-green-600 border-none self-start"
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? "Added" : "Add to Cart"}
          </Button>
        </div>
      </Card>

      <div className="mt-10">
        <Title level={3} className="text-green-700 mb-4">
          Questions & Answers
        </Title>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          className="bg-white rounded-lg"
        >
          <Panel
            header="What type of soil is best for this plant?"
            key="1"
            className="bg-gray-100 rounded-lg mb-2"
          >
            <Text className="text-gray-700">
              Well-draining soil is best for this plant to ensure proper root
              growth and avoid waterlogging.
            </Text>
          </Panel>
          <Panel
            header="How often should I water this plant?"
            key="2"
            className="bg-gray-100 rounded-lg mb-2"
          >
            <Text className="text-gray-700">
              Water this plant every 2-3 days, keeping the soil moist but not
              waterlogged.
            </Text>
          </Panel>
          <Panel
            header="Does this plant require direct sunlight?"
            key="3"
            className="bg-gray-100 rounded-lg mb-2"
          >
            <Text className="text-gray-700">
              This plant thrives in indirect light but can tolerate partial
              shade. Avoid direct sunlight to prevent leaf burn.
            </Text>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default ProductDetails;
