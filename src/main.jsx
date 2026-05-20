import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrivyProvider } from '@privy-io/react-auth'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PrivyProvider
    appId="cmfnf8e0g01dbjp0bkoqmyuhx"
    config={{
      loginMethods: ['wallet', 'twitter'],
      appearance: {
        theme: 'light',
        accentColor: '#2563eb',
      },
    }}
  >
    <App />
  </PrivyProvider>
)