let button = document.querySelector('#button').addEventListener('click', loadData)

function loadData() {
  //Create a XHR object
  let XHR = new XMLHttpRequest;

  XHR.open('GET', 'data.txt', true)

  //Optional - Used for spinners/loaders
  XHR.onprogress = function() {
    console.log('READYSTATE', XHR.readyState)
  }

  XHR.onreadystatechange = function() {
    if (XHR.status === 200 && XHR.readyState === 4) {
      console.log(this.responseText)
    }
  }

  XHR.onerror = function() {
    console.log('Request errpr....')
  }

  XHR.send()
}