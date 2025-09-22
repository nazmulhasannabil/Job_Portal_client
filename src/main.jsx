import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import Router from './router/Router.jsx'
import AuthProvider from './contexts/authContext/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      < RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)
