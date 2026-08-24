import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'

import Login from './Login.jsx'
import Register from './Register.jsx';
import Home from './Home.jsx';

function App() {

  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/',
      element: <Home />
    }
  ]);

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

// npm install react-router-dom --> to use router provider

export default App
