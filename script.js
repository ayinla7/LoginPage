const input = document.getElementById('password')
const eye1 = document.getElementById('eye1')
const eye2 = document.getElementById('eye2')

function changeType() {
  if(input.type === 'password') {
    input.type = 'text'
    eye1.style.display = 'block'
    eye2.style.display = 'none'
  } else {
    input.type = 'password'
    eye1.style.display = 'none'
    eye2.style.display = 'block'
  }
}