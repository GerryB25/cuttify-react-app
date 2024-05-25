import '../assets/css/cuttifyInput.css'
import ScissorIcon from '../assets/scissors.svg'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { CutterAPI } from '../api/cuttifyAPI'
import { Resultados } from './inputResponse'
import { GenerateQR } from '../api/downloadQR'

export function Acortador () {
  const { register, handleSubmit } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resultState, setResultState] = useState(false)
  const [link, setLink] = useState(false)

  async function submitURL (data) {
    const processedURL = await CutterAPI(data)
    if (processedURL !== false) {
      setLink(processedURL)
      GenerateQR(processedURL)
      setIsSubmitting(processedURL)
      setResultState(processedURL)
      setTimeout(() => {
        setIsSubmitting(false)
      }, 5000)
    }
  }
  return (
    <section className='init-container'>
      <form className='cuttify-input-box' onSubmit={handleSubmit(submitURL)}>
        <input type="text" className='cuttify-input' placeholder='Coloca el link por aquí!' {...register('cuttifyInput', { required: true })} />
        <button type='submit' className='acortar-button' disabled={isSubmitting}>
          <img className='tijeras' src={ScissorIcon} alt="scissors-icon" />
        </button>
      </form>
      <div className={`results-container ${resultState ? '' : 'hidden'}`}>
        <Resultados shortLink={link}/>
      </div>
    </section>
  )
}
