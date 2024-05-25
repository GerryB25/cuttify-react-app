/* eslint-disable react/prop-types */
import CopyIcon from '../assets/copy-icon.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Telegram from '../assets/telegram.svg'
import QRCode from 'react-qr-code'
import DownloadIcon from '../assets/download-icon.svg'
import { AlertaToast } from '../lib/toastyAlert'
import '../assets/css/cuttifyInput.css'

export function Resultados ({ shortLink }) {
  function CopyPaste () {
    if (shortLink !== false || undefined) {
      try {
        navigator.clipboard.writeText(shortLink)
          .then(function () {
            AlertaToast('Link copiado!', true)
          })
      } catch (err) {
        console.error(err)
      }
    }
  }

  const ShareWhatsapp = () => {
    if (shortLink !== false || undefined) {
      const encodeText = encodeURIComponent(shortLink)
      window.open(`https://api.whatsapp.com/send?text=${encodeText}`, '_blank')
    }
  }

  const ShareTelegram = () => {
    if (shortLink !== false || undefined) {
      const encodeText = encodeURIComponent(shortLink)
      window.open(`https://t.me/share/url?url=${encodeText}`)
    }
  }

  const qrlink = shortLink !== false ? shortLink : '/'

  const QRAction = () => {
    AlertaToast('Descargando...', true)
  }
  return (
      <>
        <div className="qr-box">
          <QRCode value={qrlink}/>
          <a className='download-qr' onClick={QRAction} download='qr-image.png' title='Descargar QR' id='qr-button'>
            <img src={DownloadIcon} alt="Descargar QR" />
          </a>
        </div>
        <div className='link-box'>
          <div className='link-box-input'>
            <label htmlFor="linktoshort">
              <input type="url" className='linktoshort' value={shortLink} readOnly />
              <button className='copy-btn' title='Copiar' onClick={CopyPaste}><img src={CopyIcon} alt="cut-icon" /></button>
            </label>
            <p>¡Copia el link acortado y pegalo donde desees!</p>
          </div>
          <div className='link-box-share'>
            <a className='share-icon' onClick={ShareWhatsapp} title='Compartir en Whatsapp'><img src={Whatsapp} alt="whatsapp-icon" /></a>
            <a className='share-icon' onClick={ShareTelegram} title='Compartir en Telegram'><img src={Telegram} alt="telegram-icon" /></a>
          </div>
        </div>
      </>
  )
}
