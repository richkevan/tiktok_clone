import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './_components/layout'
import { FirebaseAuthContextProvider } from './_firebase/auth-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthContextProvider>
    <Layout>
    <h1 className=' font-extrabold'>TIKTOK</h1>
    </Layout>
    </FirebaseAuthContextProvider>
  </React.StrictMode>,
)
