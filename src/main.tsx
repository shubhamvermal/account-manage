import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { UiKitProvider } from './component/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UiKitProvider >
      <App />
    </UiKitProvider>
  </React.StrictMode>,
)
