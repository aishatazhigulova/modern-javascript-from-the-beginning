class Github {
    constructor() {
        this.client_id = '8990075389c043ad4ede'
        this.client_secret = 'd5ad3a8b56e020ae4d197b4e08a22da2c1ac62b1'
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    //user - input.value
    async getUser(user) {
        let profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        let reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        let profileData = await profileResponse.json()
        let reposData = await reposResponse.json()


        return {
            profileData: profileData,
            reposData: reposData
        }
    }
}