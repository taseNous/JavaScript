// 1. Create a function “isLandscape” which takes two parameters “width” and “height” and returns true if the image is Landscape, else false. 

function isLandscape (width, height) {
    if (width > height) return true;
    else return false;
}

console.log(isLandscape(100,400));

//2. Function “FizzBuzz” which returns:
// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 and 5 => input
// Not a number => ‘Not a number’

function fizzBuzz (input) {
    if (input % 3 == 0 && input % 5 === 0) return "FizzBuzz";
    else if (input % 3 === 0) return "Fizz";
    else if (input % 5 === 0) return "Buzz";
    else if (typeof input !== 'number') return "Not a Number!";
    else if (input % 3 !== 0 || input % 5 !== 0) return input;
}

console.log(fizzBuzz('d'));


// 3. Function “checkSpeed” which takes ones parameter “speed” and checks:
// speed limit = 70
// speed = 5 more => 1 point 
// 12 points => suspended

function checkSpeed (speed) {
    limit = 70;
    points = Math.floor((speed - 70) / 5);
    if (points >= 1) {
        console.log('Points: ' + points);
        if (points >= 12) console.log('License Suspended!'); 
    }
    else console.log('Clear!');
}

checkSpeed(80);

or

function checkSpeed (speed) {
    limit = 70;
    points = Math.floor((speed - 70) / 5);
    console.log(points >= 1 ? (points >= 12 ? 'License Suspended!' : 'Points: ' + points) : 'Clear!');
}

checkSpeed(180);


// 4. Function that takes one parameter object and returns all its properties that are of type string.

const test = {
    name: 'Tasos',
    age: 25
}

function showProperties (obj) {
    for (let i in obj) {
        if (typeof obj[i] === 'string') {
            console.log(i, obj[i]);
        }
    }
}

showProperties(test);


// 5. Function that takes one parameter “limit” and returns the sum:
// Multiples of 3and 5, for example limit = 10, so: 3+6+9+5+10 = 33

function sum (limit) {
    numbers1 = Math.floor(limit / 3);
    numbers2 = Math.floor(limit / 5);
    let sum1 = 0;
    let sum2 = 0;
    let sum = 0;

    for (let i=1; i<=numbers1; i++) {
        sum1 = sum1 + 3*i;
    }

    for (let i=1; i<=numbers2; i++) {
        sum2 = sum2 + 5*i;
    }

    sum = sum1 + sum2;

    console.log(sum);
}

sum(12);


// 6. Function that takes an array as a parameter and calculates the average of the grades.

const marks = [79, 50, 40, 89]

function calculateGrade (marks) {

    let sum = 0;
    let grade = 0;

    for (let i of marks) {
        sum += i;
    }

    grade = Math.floor(sum / marks.length);

    if (grade <= 59) console.log(grade + ': F');
    if (grade >= 60 && grade <= 69) console.log(grade + ': D');
    if (grade >= 70 && grade <= 79) console.log(grade + ': C');
    if (grade >= 80 && grade <= 89) console.log(grade + ': B');
    if (grade >= 90 && grade <= 100) console.log(grade + ': A');
}

calculateGrade(marks);


// 7. Function that prints number of “*” in as many rows as the parameter. 

function showStars (rows) {
    for (let i=1; i<=rows; i++) {
        console.log("\n")
        for (let y=1; y<=i; y++) {
            process.stdout.write('*');
        }
    }
}

showStars(7);


// 8. Swap the values of a and b. 

let a = 'blue';
let b = 'red';

let c = a;
a = b;
b = c;
console.log(a, b);



// 9. Function that takes an object and prints all its properties

const address = {
    street: 'Astiggos',
    city: 'Patra',
    zipCode: 23226
}

function showAddress (address) {
    for (let i in address) {
        console.log(i, address[i]);
    }
}

showAddress(address);


// 10. Create an address object using a Constructor and a Factory Function.

// Factory Function

function showAddress (street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

const address1 = showAddress('Astiggos', 'Patra', 26223)

console.log(address1);


// Constructor Function

function ShowAddress (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new ShowAddress('Astiggos', 'Patra', 26223)

console.log(address2);


// 11. Create a function that checks if two constructor objects are equal.

// Constructor Function

function ShowAddress (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address3 = new ShowAddress('Astiggos', 'Patra', 26223);
const address4 = new ShowAddress('Astiggos', 'Patra', 26223);

function areEqual (address3, address4) {
    for (let i in address3) {
        if (address3[i] !== address4[i]) return false;
    }

    return true;
}

console.log(areEqual(address3, address4));


// 12. Function that takes 2 parameters min and max and returns in an array all the numbers between them, with the min and max. 

function arrayFromRange (min, max) {
    let numbers = [];
    for (let i=min; i<=max; i++) {
        numbers.push(i);
    }
    console.log(numbers);
}

const numbers1 = arrayFromRange(1,5);


// 13. Function that takes two parameters “array” and “number” and checks if the number is in the array and returns true.

function includes (array, element) {
    for (let i of array) {
        if (i === element) {
            return true;
        }
    }

    return false;
}

const array5 = [1,2,3];

console.log(includes(array5,5));


// 14. Function that takes two parameters “array1” and “array2” and removes from array1 the elements that also exist in the array2. 


function excludes(array1, array2) {
    return array1.filter(item => !array2.includes(item));
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2];

console.log(excludes(array1, array2)); // [3, 4]


// 15. Function that moves an element according to the offset in the parameter.

let array6 = [1, 2, 3, 4];

function move(array, index, offset) {
    const position = index + offset;

    if (position < 0 || position >= array.length) {
        console.error("Invalid offset");
        return;
    }

    const element = array.splice(index, 1)[0];
    array.splice(position, 0, element);

    console.log(array);
}

move(array6, 0, 1);


// 16. Function that counts the occurancies of a number in an array.

const array7 = [1, 1, 3, 4];

function countOccurancies (array, number) {
    
    let flag = 0;

    for (let i in array) {
        if (array[i] === number) {
            flag++;
        }
    }

    console.log(flag);
}

countOccurancies(array7, 1);


// 17. Function that finds the max number from an array.

const array8 = [1, 5, 3, 4];

function getMax (array) {
    
    let max = 0;

    for (let i in array) {
        for (let y in array) {
            if (array[y] > array[i])
                max = array[y];
        }
    }

    console.log(max);
}

getMax(array8);


// 18. Function that:

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
];

function getMovie (movies) {
    let array = [];
    for (let i in movies) {
        if (movies[i].year === 2018 && movies[i].rating > 4) {
            array.push(movies[i]);
        }
    }

    array.sort((a, b) => b.rating - a.rating);

    array.forEach(element => {
        console.log(element.title);
    });
}

getMovie(movies);


// 19. Function that prints the sum of argumetns

function sum(...array) {
    if (array.length === 1 && Array.isArray(array[0]))
        array = [...array[0]];

    return array.reduce((a,b) => a + b);
}

const array9 = [1,2,3,4];

console.log(sum(array9));


// 20. Try and Catch 

try {
    const numbers = [1,2,3,4];
    const count = countOccurences(null, 1);
    console.log(count);
}
catch(e) {
    console.log(e.message);
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array))
        throw new Error('Invalid array!');

    return array,reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        return accumulator + occurence;
    }, 0);
}


// 21. Create a function called “showNumbers” that takes a parameter called “limit”. It will print all the numbers up to the “limit” and next to them it will print “even” or “odd”.

function showNumbers (limit) {
    for (let i = 0; i<=limit; i++){
        if (i % 2 === 0) console.log( i + ' ' + "\"EVEN\""); 
        else console.log( i + ' ' + "\"ODD\"");
    } 
}

showNumbers(10);

// 22.  Create a function called “counetTruthy” that takes a parameter called “array”. It will print the number of truthy elements in the array.

function countTruthy(array) {
    let counter = 0;
    for (let i in array) {
        if (array[i]) counter++; 
    }
    console.log(counter);
};

let array10 = [0,1,2, ''];
countTruthy(array10);