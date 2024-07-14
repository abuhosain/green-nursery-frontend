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
  