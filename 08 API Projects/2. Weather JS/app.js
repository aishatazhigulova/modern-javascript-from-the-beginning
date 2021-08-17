let changeBtnEl = document.querySelector('#w-change-btn')
let cityEl = document.querySelector('#city')
let formEl = document.querySelector('#w-form')

let weather = new Weather(524901)

weather.getWeather()
    .then(results => console.log(results))
    .catch(error => console.log(error))

// changeBtnEl.addEventListener('click', (e) => {
//     let text = cityEl.value
//     console.log(text)
//     e.preventDefault()

//     weather.getWeather(text)
//         .then(data => {
//             console.log(data)
//         })

// })