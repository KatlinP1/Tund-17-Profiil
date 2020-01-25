class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML=`
            <div class ="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <h3 class="font-weight-bold text-info">${user.login}</h3>
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a class="btn btn-primary btn-block" target="_blank" href= "${user.html_url}">Go to Profile</a>
                    </div>
                    

                    <div class="col-md-9">
                        <span class="badge badge-warning">Public Repos: ${user.public_repos}</span>
                        <span class="badge badge-success">Followers: ${user.followers}</span>
                        <span class="badge badge-info">Followers: ${user.following}</span> 
                        

                        <ul class="list-group mt-4">
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member since: ${user.created_at}</li>
                        </ul>

                    </div>
                </div>
            </div>

            <h3 class="page-heading mb-3">Latest Repost</h3>
            <div id="repos"></div>
        
        `;
    }
    showRepos(repos){
        let reposArrayElement='';

        repos.forEach(repo=> {
            reposArrayElement +=`
            <div class="card card-body mb-2"> 
                <div class="row">
                    <div class="col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>

                <div class="col-md-6">
                    <span class="badge badge-info float-right"> Followers: ${repo.forks_count}</span>
                </div>



                </div>
            </div>
            
            `;

            document.getElementById('repos').innerHTML=reposArrayElement;

        });
    }
}