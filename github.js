class GitHub { 
    constructor(){
        this.client_ID = '3ced984202aa0b699560';
        this.client_secret ='c6d88c5ab9ea45cfa6e319347e4ef3e1baf487e0';
        this.repos_count =10;
        this.repos_sort= 'created';
        this.repos_sort_direction= 'desc';
        this.user= 'Katlintthk';
        this.apiUrl='https://api.github.com/users/';
    }

    async getUserData(){
        let urlProfile = `${this.apiUrl}${this.user}?client_id=${this.client_ID}&client_secret=${this.client_secret}`;
        let urlRepos= `${this.apiUrl}${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&direction=${this.repos_sort_direction}&client_id=${this.client_ID}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        var d = new Date(profile.created_at);
        profile.created_at=d.toLocaleString();

        return{
            profile,
            repos
        }
    }


}