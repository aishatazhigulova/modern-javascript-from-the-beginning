class UI {
    constructor() {
        this.profileEl = document.querySelector('#profile')
    }

    showProfile(user) {
        this.profileEl.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `
    }


    showRepos(repos) {
        let output = '';
    
        repos.forEach(function(repo) {
          output += `
            <div class="card card-body mb-2">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                <span class="badge badge-success">Forks: ${repo.forms_count}</span>
                </div>
              </div>
            </div>
          `;
        });
    
        // Output repos
        document.getElementById('repos').innerHTML = output;
      }

    clearProfile() {
        this.profileEl.innerHTML = ''
    }


    clearRepos() {
        document.getElementById('repos').innerHTML = '';
    }



    clearAlert() {
        let currentAlertEl = document.querySelector('.alert')

        if (currentAlertEl) {
            currentAlertEl.remove()
        }
    }

    showAlert(message, className) {
        this.clearAlert()
        let messageEl = document.createElement('div')
        messageEl.className = className
        messageEl.appendChild(document.createTextNode(message))

        let containerEl = document.querySelector('.searchContainer')
        let searchEl = document.querySelector('.search')

        containerEl.insertBefore(messageEl, searchEl)

        setTimeout(() => {
            this.clearAlert()
        }, 2000);
    }
}