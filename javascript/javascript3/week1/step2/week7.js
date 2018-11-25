const url = 'https://api.github.com/orgs/HackYourFuture-CPH/repos'
let repositories = [];

fetch(url)
    .then((res) => res.json())
    .then((repos) => {
        reposotories = repos;
        document.getElementById('all-repos').addEventListener('click', getRepos);
        document.getElementById('with-contributors').addEventListener('click', getRepContributors);
        document.getElementById('goButton').addEventListener('click', searchRepo);


    })

function repos() {
    let repo = '';
    repositories.map(x => {
        repo += ` <ul>
        <li>
        Name: <a href= "https://api.github.com/orgs/HackYourFuture-CPH/repos${x.name}"target ="_blank"> ${x.name}</a><br>
        Description:${x.description}<br>
        Language:${x.lanuage}<br>
        size:${x.size}<br>
        Forks:${x.forks}<br>
        Stargazers:${x.stragazers.count}<br>
        Watchers:${x.watchers}<br>
        </li>
        </ul>`;

    })
    document.getElementById('repos').innerHTML = repo;

}

function getRepContributors() {
    let output = '';
    reposotories.map(x =>{
        output += ` <ul>
        <li>
        <a href= "https://api.github.com/orgs/HackYourFuture-CPH/repos${x.name}"target="blank">${x.name}</a><br>
        <button onClick = "showRepcontributors('${x.name}')" class ="contri-btn"> contributors</button><br>
        </li>
        </ul> `;

    })
    document.getElementById('contributors').innerHTML = output;

}

function showRepcontributors(name) {
    fetch (`https:/api.github.com/repos/HackYourFuture-CPH/${name}/contributors`)
    .then((res)=> res.json())
    .then((data)=>{
        let output =`<center><h2 class ="repo-infor">${name}Contributors:</h2></center>`;
        let output1 ="";
        data.map(x=>{
            output1+= `<br><ul>
            <li><b>
            ${x.login} </b><br>
            <img src= "${x.avatar_url}" class= cont-pic>
            </li>
            <ul>`;
        })
document.getElementById('container5').innerHTML =(output+ output1);

})
}

function searchRepo(){
    let goValue =document.getElementById("search1").value;
    let repoInfo ='';
    repositories.filter(x=>{
        if (goValue.toLowerCase()===x.name.toLowerCase()){
            repoInfo+=`<ul>
            <li>
            Name: <a href="https://api.github.com/repos/HackYourFuture/${x.name}" target="_blank">${x.name}</a><br>
            Language :${x.lanuage}<br>
            Description: ${x.description}<br>
            Learn more about ${x.name}<a href="https://api.githun.com/repos/HackYourFuture/${x.name}"> here.</a>
            </li>
            </ul>`;
        }
        document.getElementById('searchRepo').innerHTML=repoInfo;
    })
}