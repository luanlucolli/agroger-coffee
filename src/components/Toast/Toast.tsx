// src/components/Toast/Toast.tsx
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const showToast = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
  toast(message, {
    position: 'top-center',
    type,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'colored'
  })
}

export const Toast = () => <ToastContainer />
