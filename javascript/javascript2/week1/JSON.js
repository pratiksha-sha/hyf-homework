const request = new XMLHttpRequest();
request.open('Get','main.json',true);
request.onload =function (){
    console.log(arr[2]);
}





/*
  console.log(arr[2]);

  //Declaring an array of repos I will use later 
const currentCurr =[ 'HTML-CSS','JavaScript1', 'Node.js',' Databases','React','Project']
console.log(currentCurr);

//filtering the name of rpos from JSON strings that I need
function curriculumNeeded(repo){
    return currentCurr.includes(repo.name);

}


/*
  function makelist(){
  const ul =document.createElement ('ul');
    for(i = 0; i<arr.length; i++){
        

        const li=document.createElement('li');
        ul.appendChild(li);
        
        const h2 =document.createElement('h2');
        li.appendChild(h2);

        const h3 =document.createElement('h3');
        li.appendChild(h3);

        h2.innerHTML = arr[i].watchers;
        h3.innerHTML = arr[i].stargazers_count;
          
        
    }
    document.getElementById("repo").appendChild(ul);
    }
    makelist();
    
    */