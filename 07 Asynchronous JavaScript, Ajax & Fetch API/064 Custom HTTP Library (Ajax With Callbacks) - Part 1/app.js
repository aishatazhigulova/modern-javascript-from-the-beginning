let http = new easyHTTP

// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   console.log(posts)
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(posts)
//   }
// })

let data = {
  title: 'This is',
  body: 'This is a custom post'
}

// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(post)
//   }
// })


http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if (err) {
    console.log(err)
  } else {
    console.log(response)
  }
})
