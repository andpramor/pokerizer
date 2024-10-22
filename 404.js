let path = window.location.pathname

// Comprobar si está dentro de un proyecto, en "miurl/proyectoX/"
let match = path.match(/^\/([^\/]+)\/([^\/]+)\/?/)

if (match) {
  let projectName = match[1] // "proyecto1", "proyecto2", etc.
  window.location.replace('https://andrespradomorgaz.com/' + projectName)
} else {
  let countdown = 5
  const timer = document.getElementById('countdownTimer')

  const interval = setInterval(() => {
    countdown--
    timer.textContent = countdown

    if (countdown === 0) {
      clearInterval(interval)
      window.location.href = 'https://andrespradomorgaz.com'
    }
  }, 1000)
}
