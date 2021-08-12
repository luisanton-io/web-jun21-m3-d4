// // DEFAULT PARAMETERS
// function sum(a = 0, b = 0) {
//     return a + b
// }

// console.log(sum())

// REST PARAMETER
function sum(...params) {
    // let result = 0
    // for (let number of params) {
    //     result = result + number
    // }
    // return result

    return params.reduce((a, c) => a + c, 0)
}

// console.log(sum(5, 4, 3))

// OBJECTS SHORTHAND SYNTAX

// const name = "Luis"
// const age = 27

// const person = { name, age }

// console.log(person)

function makePerson(name, age) {
    return { name, age }
}

// OBJECTS DESTRUCTURING

// const { name, age } = makePerson("Stefano", 33)

const person = {
    name: "Stefano Miceli",
    age: 33,
    personal: {
        favFood: "pizza",
        yearsOfExperience: 100000
    }
}

// const name = person.name
// const age = person.age
// const yearsOfExperience = person.yearsOfExperience

// const favFood = person.favFood
const { favFood } = person

// console.log(favFood)


// DESTRUCTURED RENAMED VARIABLE
let { name: whatever, age } = person

// console.log(whatever)

const luis = makePerson("Luis", 27)

// console.log(luis);

const recipient = {};

// DESTRUCTURED ASSIGNMENT

({ name: recipient.name, personal: recipient.personal } = person)

person.personal.yearsOfExperience = 10

// console.log(recipient)

// ARRAY DESTRUCTURING

// const numbers = [10, 20]

// const first = numbers[0]
// const second = numbers[1]

// const [first, second] = numbers // [10, 20]
// const [anything] = numbers

// console.log(anything)

// const useState = [0, n => { number = n }]

// let number = 0
// let setNumber = n => { number = n }

// for (let item of useState) {
//     console.log("Type of element: ", typeof item)
// }

// let [number, setNumber] = useState


// setNumber(9)

// console.log(number)

// console.log(name, age, favFood)

// PARAMETERS DESTRUCTURING

function multiply({ a, b }) { // { a, b } = multiplier
    return a * b
}

// console.log(multiply({ b: 9, a: 19 }))

function makeCar({ brand, manufactured, gotAnIncident }) {

    // if (gotAnIncident) console.log("oops")

    //.....
    return { brand, manufactured }
}

const newCar = makeCar({ brand: 'bmw', manufactured: 2018, gotAnIncident: true })

// console.log(newCar)


// SPREAD OPERATOR

const newPerson = { ...person }

person.name = 'Stefano Casasola'

// console.log(newPerson)

const numbers = [4, 5, 78, 3]

const newArray = [...numbers] // new array is a new array containing the elements in numbers
// const newArray = numbers // newArray IS numbers
// numbers.shift()

// console.log(...numbers)
// console.log(newArray)

// MORE HANDY ARRAY METHODS

// .flat

const _numbers = [1, 2, 3, [4, 5], [6, 7, [8, 9, [10]]]]
const flattened = _numbers.flat(3)

// console.log(..._numbers.flat(9999))

// .findIndex

const people = [makePerson("Stefano", 33), makePerson("Riccardo", 31), makePerson("Diego", 33)]

console.log(people)

const riccardoIndex = people.filter(person => person.name === "Riccardo")

// const threeIndex = _numbers.find(n => n === 3)
console.log(riccardoIndex)

// .fill

const __numbers = [1, 2, 3, 4, 5, 6]

// Three params: value to fill, start index, end index
__numbers.fill(0, 4, 5)
__numbers.fill(0, 0)

console.log(__numbers)


// function deepClone(objectToClone) {
//     Object.keys(objectToClone).forEach(key => {
//         if (["object", "function"].includes(typeof objectToClone[key])) {
//             newObject[key] = deepClone(objectToClone[key])
//         }
//         newObject[key] = objectToClone[key]
//     })
// }

// function deepClone (objectToClone) {
//     return JSON.parse(JSON.stringify(objectToClone))
// }