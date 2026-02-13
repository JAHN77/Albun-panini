import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'


import Cards_details from './components/Cards_details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/card/:id",
    element: <Cards_details />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
