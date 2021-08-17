async function getUsers() {
  let response = await fetch('https://jsonplaceholder.typicode.com/users')

  let data = await response.json()

  return data
}

getUsers().then(users => console.log(users))