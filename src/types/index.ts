export * from "./sidebar.types"

// types.ts

export interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface IProduct {
    _id: string;
    title: string;
    price: number;
    category: Category;
    quantity: number;
    description: string;
    rating: number;
    image: string;
    isDeleted: boolean;
  }
  
  export interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
  }

  export interface Order {
    _id: string;
    userId?: string;  
    productId: string;  
    quantity: number;
  }
  export interface CreateOrderPayload {
    userId?: string;  
    productId: string; // Required for creating an order
    quantity: number; // Required for creating an order
  }
  
  export interface UpdateOrderPayload {
    quantity?: number; // Optional
    totalPrice?: number; // Optional
    isCanceled?: boolean; // Optional
  }
  
  