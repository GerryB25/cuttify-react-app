export async function GenerateQR (link) {
  const encodeLink = encodeURIComponent(link)
  try {
    const qrImage = await fetch(`https://cutfy.vercel.app/api/generateQR/${encodeLink}`)
    const response = await qrImage.json()
    const qrButton = document.getElementById('qr-button')
    qrButton.href = response.qr
  } catch (error) {
    console.log(error)
  }
}
