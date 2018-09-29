//number 1
console.log ("Hello World!")
console.log ("Hello,verden!")//danish
console.log ("namaste,Sansar!")//urdu
console.log ("namaste,duniya!") //Nepali
 
//number 2
const variable = 8;

//number 3
const myFavourites = ['','',''];
console.log ('The values in my list are:' + myFavourites);
console.log (typeof myFavourites);

const myFavAnimals = ['rabbit','dog','elephant'];//adding baby pig
console.log(myFavAnimals);

const newAnimal = "baby pig"
console.log('my favourite animals are:' + myFavAnimals + newAnimal);

//number 4
let myString = ("this is a test");
console.log (myString.length);

//number 5
const baby = 1;
console.log ('The value of my variable baby is:' + baby);
console.log (typeof baby);

const babyLikes = "to babble";
console.log ('The value of my variable babyLikes is:' +babyLikes)
console.log(typeof babyLikes);

const babyCan = ['walk', 'say hej','use spoon'];
console.log ('The value of my variable babyCan is:' +babyCan)
console.log(typeof babyCan);

const babyBoy = true;
console.log ('The value of my variable babyBoy is:' +babyBoy)
console.log(typeof babyBoy);


//step 4 Age-ify

const yearOfBirth = 1991
console.log(typeof yearOfBirth);

const yearFuture = 2050
console.log(typeof yearFuture);

const age = yearFuture - yearOfBirth;
console.log('you will be:' + age + 'years old in' + yearFuture);

//goodboy-oldboy

const dogYearOfBirth = 1991
const dogYearFuture = 2027
const shouldShowResultInDogYears = false;
if (shouldShowResultInDogYears ===true){
    const dogYear = (dogYearFuture - dogYearOfBirth);
    console.log ('your dog will be:'+ dogYear + 'dog years old in' + dogYearFuture );
}
else {
    const dogYear= (dogYearFuture - dogYearOfBirth)* 2 ;
    console.log ('your dog will be:' + dogYear + 'human years old in' + dogYearFuture);
}

//Housey pricey
const volumeInMetersPetersHouse = 8* 10 * 10;

const volumeInMetersJuliasHouse = 5* 11* 8;

const housePricePeter = volumeInMetersPetersHouse * 2.5 * 1000 + 100 *300;
console.log (housePricePeter);
const housePriceJulia = volumeInMetersPetersHouse * 2.5 * 1000 +70 * 300;
console.log (housePriceJulia);
 
if (housePricePeter <= 2500000 ){
    priceOk ='paid high';
    console.log ("Peter" + priceOk + 'for the house');}
else {
    priceOk =" paid less"
    console.log ( "Peter" + priceOk +  'for the house');
}

if (housePriceJulia <= 1000000){
    priceOk = 'paid high';
    console.log ("Julia" + priceOK + 'for the house');}
else {
    priceOk = " paid less";
    console.log ("Julia" + priceOk + 'for the house');
}   

