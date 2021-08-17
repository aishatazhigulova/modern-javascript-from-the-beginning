class Weather {
    constructor(city) {
        this.secret_key = '54f5103adebd21c7857bbdec0cfb12ca'
        this.city = this.city
    }

    async getWeather() {
        let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.secret_key}`)
        let data = await response.json()

        return data
    }

    changeLocation(city) {
        this.city = city
    }
}
