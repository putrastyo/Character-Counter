const text = document.getElementById('text')
const result = document.getElementById('result')


text.addEventListener('input', (e) => {
  let textValue = text.value
  result.innerText = textValue.length
})