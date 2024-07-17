export interface Category {
    _id: string;
    name: string;
    description: string;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  export interface Product {
    _id: string;
    title: string;
    price: number;
    category: Category; // Category is a nested object
    quantity: number;
    description: string;
    rating: number;
    image: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
  }
  