export function responses (number) {
  switch (number) {
    case 200:
      return { mensaje: 'Link acortado!', color: true }
    case 777:
      return { mensaje: 'Este link ya fue acortado!', color: false }
    case 300:
      return { mensaje: 'QR no disponible', color: false }
    case 400:
      return { mensaje: 'Algo salió mal :c', color: false }
    case 500:
      return { mensaje: 'Link inválido', color: false }
    case 600:
      return { mensaje: 'Descargando QR...', color: true }
  }
}
