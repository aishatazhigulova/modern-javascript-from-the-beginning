/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/


 class EasyHTTP {
  async get(url) {
    let response = await fetch(url)
    let resdata = await response.json()
    return resdata
  }


  async post(url, data) {
    let response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let resdata = await response.json()
    return resdata
  }


  async put(url, data) {
    let response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    let resdata = await response.json()
    return resdata
  }


  async delete(url) {
    let response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
    let resdata = await 'Resource deleted'
    return resdata
  }
}