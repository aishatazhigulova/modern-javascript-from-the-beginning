let searchEl = document.getElementById('searchUser')

let github = new Github //to instantiate a Github class
let ui = new UI //to instantiate a Github class


searchEl.addEventListener('input', (e) => {
    let text = e.target.value
    
    if (text !== '') {
        // Make http call
        github.getUser(text)
        .then(data => {
            if (data.profileData.message === 'Not Found') {
                //Show alert
                ui.showAlert('Not Found', 'alert alert-danger')
            } else {
                ui.showProfile(data.profileData)
                ui.showRepos(data.reposData)
            }
        })
    } else {
        ui.clearProfile()
        ui.clearRepos()
    }
});


