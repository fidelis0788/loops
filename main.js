// Create a new repo
// Clone it
// Create a branch called loops off of master
// Complete each of the following exercises.
// Use a do...while loop to console.log the numbers from 1 to 1000.
// Create an object (an array with keys and values) called person with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
// Use .map() to map over the arrayOfPersons and console.log() their information.
// Use .filter() to filter the persons array and console.log only males in the array.
// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
 
i = 0;

do{
 i++;
 console.log(i)
}while(i < 1000)



let people =[
person1 ={
firstName: "Jane",
lastName: "Doe",
birthDate: "1925-7-3",
gender: "female"
},
person2 ={
firstName: "Mary",
lastName: "moore",
birthDate: "1995-3-5",
gender: "female"
},
person3={
firstName: "mike",
lastName: "james",
birthDate: "1922-5-1",
gender: "male"
}
]
console.log('This function prints out loops through the array and prints out infos of each person')  
let infos = people.map(function(element,index){
return `${element.firstName} ${element.lastName} is a ${element.gender} born ${element.birthDate}`

})
console.log(infos)

console.log ("This function filters the people with gender male")

let males = people.filter(function(person){
  return person.gender == "male"
  })
console.log(males)
console.log("filter the persons array and console.log only people that were born before Jan 1, 1990")

let bornBefore1990 = people.filter(function(person){
return person.birthdate != "1990-5-1"
})
console.log(bornBefore1990)

