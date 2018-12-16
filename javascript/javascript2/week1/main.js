


//Declaring an array of repos I will use later 
const currentCurr =[ 'HTML-CSS','JavaScript1', 'Node.js']
console.log(currentCurr);

//filtering the name of rpos from JSON strings that I need
function curriculumNeeded(repo){
  return currentCurr.includes(repo.name);

}

function makelist(){
  const leftList =document.createElement('ul');
  const rightList=document.createElement('ul');
  for(i = 0; i<arr.length; i++){
    if (arr[i].name === 'HTML-CSS' ||  arr[i].name === 'JavaScript1' || arr[i].name ==='Node.js'|| arr[i].name ==='Git'){
    const moduleName = document.createElement('li')
      leftList.appendChild(moduleName);

    const strangazers = document.createElement('li');
    rightList.appendChild(strangazers);

    const watchers = document.createElement('li');
    rightList.appendChild(watchers);

    const forks =document.createElement('li');
    rightList.appendChild(forks);

    const language =document.createElement('li');
    rightList.appendChild(language);

    

    moduleName.innerHTML = arr[i].name;
    strangazers.innerHTML = arr[i].stargazers_count;
    watchers.innerHTML = arr[i].watchers_count;
    forks.innerHTML = arr[i].forks_count;
    language.innerHTML = arr[i].language;

    document.getElementById("repoleft").appendChild(leftList);
    document.getElementById("reporight").appendChild(rightList);
    
}
}
}
makelist();
     

        
        
      
  