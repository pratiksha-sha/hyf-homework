//step 1

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback){
    let values =[];
    for (i = startIndex; i<= stopIndex; i++){
        if (i% 3 ===0 && i% 5===0){
            threeCallback(i);
            fiveCallback(i);
        }
        else if (i% 3 ===0){
            threeCallback(i);
        }
        else if (i% 5===0){
            fiveCallback(i);
        } 
    return values;
}
console.log (values);
}
threefive(10,15);

//using for loop
function repeatString(str,num){
    let repeatStr =' ';
    for( i = 0;i < num; i++) {
        repeatStr += str;
    }
    return repeatStr;
}
console.log(repeatString('abc',3));

// while loop
function repeatString(str, num){
    let repeatStr =' ';
    let i = 0;
    while( i< num){
        repeatStr += str;
        i++;

    }
    return repeatStr;
}
console.log(repeatString('abc',3));

//do loop
function repeatString(str, num){
    let repeatStr =' ';
    let i = 0;
    do{
        repeatStr += str +i;
        i++;
    }
    while(i < num);
}

console.log(repeatString('abc',3));
