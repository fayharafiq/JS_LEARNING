//This is the const it can't change once you declared it
const patientId = 123456; 

// let is based on block scope
let patientEmail = "patient@gmail.com"; 

// var is based on global scope
var patientPassword = "Patient@123"; 

// that's not an ideal decision for declare any variable without let or var
patientCountry = "Pakistan"; 

//it'll show undefined
let patientState;

// patientId = 234556; // not allowed because that was an const 

console.log(patientId);
 patientEmail = "abc@gmail.com";
 patientPassword = "abc@123";
 patientCountry = "Iran";

/* Prefer not to use var because 
of an issue in block scope and functional scope */

console.table([patientId, patientEmail, patientPassword, patientCountry, patientState]);