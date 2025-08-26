import { useDispatch } from 'react-redux';
import './App.css';
import AllRoutes from './components/AllRoutes';
import { setCart } from './Action';
import { useEffect } from 'react';


function App() {
  const dispatch = useDispatch();
  // App.js
useEffect(() => {
  const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
  dispatch(setCart(savedCart));
}, [dispatch]);


  return (
    <>
      <AllRoutes/>
    </>
  );
}

export default App;
