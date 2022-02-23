let raceNumber = Math.floor(Math.random() * 1000);

let earlyRegister = true;
let age = 25;

// if (age > 18 && earlyRegister === true) {
//   raceNumber += 1000;
// }

if (age >= 18 && earlyRegister === true) {
  console.log(`Your race will start at 9:30AM. Your race number is ${(raceNumber + 1000)}`)
} else if (age >= 18 && earlyRegister === false){
  console.log(`Your race will start at 11:00AM. Your race number is ${raceNumber}`)
} else if (age < 18) {
  console.log(`Your race will start at 12:30AM. Your race number is ${raceNumber}`)
}
