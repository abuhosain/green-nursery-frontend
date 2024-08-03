/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {
  Table,
  Button,
  Card,
  Typography,
  Row,
  Col,
  InputNumber,
  Divider,
  Space,
  message,
} from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../../redux/feature/cart/cartSlice";
import { CartItem } from "../../types";
import { useCreateOrderMutation } from "../../redux/feature/order/orderApi";


const { Title, Text } = Typography;

const Checkout: React.FC = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state: RootState) => state.cart.items);
  const [createOrder] = useCreateOrderMutation();

  const handleQuantityChange = (productId: string, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleRemoveItem = (productId: string) => {
    dispatch(removeFromCart(productId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout = async () => {
    try {
      const orderPayload = cartData.map((item: CartItem) => ({
        userId: "6692f2643825442313d42cc3",  
        productId: item.productId,
        quantity: item.quantity,
      }));
      await Promise.all(orderPayload.map(order => createOrder(order).unwrap()));
      message.success("Order placed successfully!");
      dispatch(clearCart()); // Clear cart after successful order
    } catch (error) {
      message.error("Failed to place the order.");
    }
  };

  const totalAmount = cartData.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text: number) => `$${text.toFixed(2)}`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
      render: (text: number, record: CartItem) => (
        <InputNumber
          min={1}
          value={text}
          onChange={(value) =>
            handleQuantityChange(record.productId, value || 1)
          }
        />
      ),
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_: number, record: CartItem) =>
        `$${(record.price * record.quantity).toFixed(2)}`,
    },
    {
      title: "",
      key: "action",
      render: (_: any, record: CartItem) => (
        <Button
          type="link"
          icon={<DeleteOutlined />}
          onClick={() => handleRemoveItem(record.productId)}
        />
      ),
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      <Title level={2} className="text-center mb-6">
        Shopping Cart
      </Title>
      <Row gutter={16}>
        <Col span={18}>
          <Card className="shadow-md mb-6">
            <Table
              dataSource={cartData.map((item: CartItem) => ({
                ...item,
                key: item.productId,
              }))}
              columns={columns}
              pagination={false}
              rowClassName="hover:bg-gray-100"
            />
          </Card>
        </Col>
        <Col span={6}>
          <OrderSummary
            totalAmount={totalAmount}
            onClearCart={handleClearCart}
            onCheckout={handleCheckout}
          />
        </Col>
      </Row>
    </div>
  );
};

interface OrderSummaryProps {
  totalAmount: number;
  onClearCart: () => void;
  onCheckout: () => void;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({
  totalAmount,
  onClearCart,
  onCheckout,
}) => {
  const tax = totalAmount * 0.05;
  const shipping = 10.0;
  const grandTotal = totalAmount + tax + shipping;

  return (
    <Card title="Order Summary" className="shadow-md">
      <Divider orientation="left">Summary</Divider>
      <Space direction="vertical" className="w-full">
        <SummaryRow label="Subtotal" value={totalAmount} />
        <SummaryRow label="Tax (5%)" value={tax} />
        <SummaryRow label="Shipping" value={shipping} />
        <Divider />
        <SummaryRow label="Total" value={grandTotal} isBold isTotal />
      </Space>
      <Button
        type="primary"
        onClick={onCheckout}
        className="w-full mt-4"
        size="large"
      >
        <ShoppingCartOutlined /> Submit Order
      </Button>
      <Button
        type="default"
        onClick={onClearCart}
        className="w-full mt-2"
        size="large"
      >
        Clear Cart
      </Button>
    </Card>
  );
};

interface SummaryRowProps {
  label: string;
  value: number;
  isBold?: boolean;
  isTotal?: boolean;
}

const SummaryRow: React.FC<SummaryRowProps> = ({
  label,
  value,
  isBold,
  isTotal,
}) => {
  return (
    <Text
      className={`flex justify-between ${isBold ? "font-bold" : ""} ${
        isTotal ? "text-xl" : ""
      }`}
    >
      {label}: <span>${value.toFixed(2)}</span>
    </Text>
  );
};

export default Checkout;
