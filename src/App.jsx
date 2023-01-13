import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
import Product from "./pages/Product";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ScrollToTop from './components/Effects/ScrollToTop';
import ProductsPage from './pages/ProductsPage';
import Success from './pages/Success';
import Favorites from './pages/Favorites';
import Privacy from './pages/Privacy';

const Cart = React.lazy(() => import('./pages/Cart'));
const Home = React.lazy(() => import('./pages/Home'));

// App

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <ScrollToTop  />
      <Routes>
        <Route exact path='/' element={
          <React.Suspense fallback={
            <CircularProgress style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              margin:'auto',
              color:'#01bf71',
              height:'100vh',
            }} />
          }>
            <Home />
          </React.Suspense>
        } />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:categories' element={<ProductsPage />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        <Route
          path='/register'
          element={user ? <Navigate to='/' /> : <Register />}
        />
        <Route path='/logout' element={<Home />} />
        <Route path='/cart' element={
          <React.Suspense fallback={
              <CircularProgress style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                margin:'auto',
                color:'#01bf71',
                height:'100vh',
              }} />
          }>
            <Cart />
          </React.Suspense>
        } />
        <Route path='/favorites' element={
          <React.Suspense fallback={
              <CircularProgress style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                margin:'auto',
                color:'#01bf71',
                height:'100vh',
              }} />
          }>
            <Favorites />
          </React.Suspense>
        } />
        <Route path='/success' element={<Success />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </Router>
  )
}

export default App