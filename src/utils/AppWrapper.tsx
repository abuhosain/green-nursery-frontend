import React from 'react';
import { useSelector } from 'react-redux';
 
import { RouterProvider } from 'react-router-dom';
import { RootState } from '../redux/store';
import usePageReloadWarning from '../hooks/usePageReloadWarning ';
import router from '../routes/route';
 

const AppWrapper: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // Trigger a warning if there are items in the cart
  usePageReloadWarning(cartItems.length > 0);

  return <RouterProvider router={router} />;
};

export default AppWrapper;
