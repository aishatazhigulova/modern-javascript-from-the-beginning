//QuerySelector
let card = document.querySelector('.card')
let heading = document.querySelector('.heading')

let form = document.querySelector('#loan-form')
let amount = document.querySelector('#amount')
let interest = document.querySelector('#interest')
let years = document.querySelector('#years')
let btn = document.querySelector('.btn')

let loading = document.querySelector('#loading')
let results = document.querySelector('#results')

let monthlyPayment = document.querySelector('#monthly-payment')
let totalPayment = document.querySelector('#total-payment')
let totalInterest = document.querySelector('#total-interest')


form.addEventListener('submit', (e) => {
  //Hide results
  results.style.display = 'none'

  //Show Loader
  loading.style.display = 'block'

  setTimeout(calculateResults, 2000)
  e.preventDefault()

})

function calculateResults(e) {
  //A = P {r(1+r)n} / {(1+r)n –1}
  let p = parseFloat(amount.value)
  let r = parseFloat(interest.value)
  let n = parseFloat(years.value)

  //Compute monthly payment
  let x = Math.pow(1 + r, n)
  let monthly = (p * x * r) / (x - 1)
  console.log(monthly)

  //Add a result
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2)
    totalPayment.value = (monthly * n).toFixed(2)
    totalInterest.value = ((monthly * n) - p).toFixed(2)
    //Show result
    results.style.display = 'block'
    //Hide load
    loading.style.display = 'none'
  } else {
    showError('Please check your numbers')
  }
}

//Show Error
function showError(error) {
  //Hide result
  results.style.display = 'none'
  //Hide load
  loading.style.display = 'none'
  //Create a div
  let alert = document.createElement('div')
  alert.className = 'alert alert-danger'
  alert.appendChild(document.createTextNode(error))

  //Inset above heading
  card.insertBefore(alert, heading)

  //Clear error after 3seconds
  setTimeout(clearError, 3000)
}

//Clear Error
function clearError() {
  document.querySelector('.alert').remove()
}


