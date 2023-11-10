import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './_components/layout'
import { FirebaseAuthContextProvider } from './_firebase/auth-context'
import VideoDisplay from './_components/video-scroll'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseAuthContextProvider>
    <Layout>
    <div className='w-2/5 flex flex-col gap-28 mt-16'>
    <VideoDisplay />
    </div>
    </Layout>
    </FirebaseAuthContextProvider>
  </React.StrictMode>,
)
