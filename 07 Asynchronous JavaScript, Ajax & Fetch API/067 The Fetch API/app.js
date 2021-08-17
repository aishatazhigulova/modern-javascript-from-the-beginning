document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('test.txt')
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector('#output').innerHTML = data
    })
    .catch(error => {
      console.log(error)
    })
}


function getJson() {
  fetch('posts.json')
    .then(response => {
      return response.json()
    })
    .then(data => {
      let output = ''
      data.forEach(element => {
        output += 
        `
        <li>${element.title}</li>
        <li>${element.body}</li>
        `
      });
      document.querySelector('#output').innerHTML = output

    })
    .catch(error => {
      console.log(error)
    })
}


function getExternal() {
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => document.querySelector('#output').innerHTML = data.value.joke)
    .catch(error => console.log(error))
}