let buttonEl = document.querySelector('.get-jokes')
let inputEl = document.querySelector('#number')

buttonEl.addEventListener('click', getJokes) 

function getJokes(e) {
  e.preventDefault()
  
  let number = parseInt(inputEl.value)

  let xhr = new XMLHttpRequest

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(this.responseText)
      let output = ''

      if (response.type === 'success') {
        response.value.forEach(joke => {
          output += `<li>${joke.joke}</li>`
        });
      } else {
        output += `<li>Something went wrong</li>`
      }

      document.querySelector('.jokes').innerHTML = output
    }
  }
  
  xhr.send()
}