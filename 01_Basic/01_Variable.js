const patientId = 123456; //This is the const it can't change once you declared it
let patientEmail = "patient@gmail.com"; // let is based on block scope
var patientPassword = "Patient@123"; // var is based on global scope
patientCountry = "Pakistan"; // that's not an ideal decision for declare any variable without let or var

// patientId = 234556; // not allowed because that was an const 

console.log(patientId);
 patientEmail = "abc@gmail.com";
 patientPassword = "abc@123";
 patientCountry = "Iran";
/*  */
console.table([patientId, patientEmail, patientPassword, patientCountry]);