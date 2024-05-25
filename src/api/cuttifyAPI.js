import { toastyMessage } from '../lib/toastyAlert'

export async function CutterAPI (formData) {
  const notCuttify = /cuttify/i
  const url = formData.cuttifyInput
  if (notCuttify.test(url)) {
    toastyMessage(777)
    return false
  }

  try {
    const shortLink = await fetch('https://cutfy.vercel.app/api/shortener', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!shortLink.ok) {
      toastyMessage(400)
      return false
    }
    const response = await shortLink.json()
    toastyMessage(response.code)

    return response.link !== undefined ? response.link : false
  } catch (error) {
    console.error(error)
    toastyMessage(400)
    return false
  }
}
