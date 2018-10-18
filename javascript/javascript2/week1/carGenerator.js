


/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with car objects with random color and speed
 * @param {integer} numberOfCars - The number of cars 
 * @returns {array} Array containing the car objects
 */

function generateCars(numberOfCars) {
    const cars = [];

    const carMakes = ['Honda', 'BMW','Fiat','Skoda','Volvo'];
    const carColors = ['lightgrey', 'lightcyan','lightyellow','lightgreen','lightcoral','lightpink'];
    
    for (let i = 0; i < numberOfCars; i++) {
        const car = {};
        const randomMakeIndex = randomIntFromInterval(0, carMakes.length - 1);
        const randomColorIndex = randomIntFromInterval(0, carColors.length - 1);

        car.make = carMakes[randomMakeIndex];
        car.color = carColors[randomColorIndex];
        car.speed = randomIntFromInterval(0, 100);

        cars.push(car);
    }
    return cars;
    
}
//generate 10 cars
const cars = generateCars(10);
    console.log (cars);

//caars with speed between 30 and 60
const carSpeedLimit = cars.filter(cars=> cars.speed >=30 && cars.speed <= 50);
function carSpeed(cars){
    return carSpeedLimit;
}
console.log(carSpeedLimit);

//Filtering the cars with colour that are not light yellow

const carsNotYellow = cars.filter(cars => cars.color !== "lightyellow");
function carMake(cars){
    return carsNotYellow;
}
console.log(carsNotYellow);

//maping out the care makes that are not light uellow in color

const remainderCars = carsNotYellow.map(cars => cars.make);
console.log(remainderCars);

// chaning the lanuage to danish
function changeLanguage(car){
    return{
        mærke:car.make,
        farve:car.color,
        fart:car.speed,
    }
}
console.log (cars.map(changeLanguage));
    











