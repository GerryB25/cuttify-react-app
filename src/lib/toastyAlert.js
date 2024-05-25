import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'
import { responses } from '../api/responses'

export function AlertaToast (mensaje, color) {
  Toastify({
    text: mensaje,
    duration: 3000,
    position: 'center',
    offset: {
      y: '4em'
    },
    style: {
      background: color = color === true ? 'linear-gradient(to top, #00b09b, #96c93d)' : 'linear-gradient(to top, #ee8712, #ff0000)'
    }
  }).showToast()
}

export function toastyMessage (codigo) {
  const { mensaje, color } = responses(codigo)
  AlertaToast(mensaje, color)
}
