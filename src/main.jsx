import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store,Index } from './Config'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <Index />
  </StrictMode>,
  </Provider>,  
)