// date is a object in js
let date = new Date();
console.log(date); // Current date and time
console.log(date.toString()); // String representation of the date
console.log(date.toDateString()); // Date in a human-readable format
console.log(date.toTimeString()); // Time in a human-readable format
console.log(date.toISOString()); // ISO 8601 format of the date
console.log(date.getFullYear()); // Current year
console.log(date.getMonth()); // Current month (0-11, where 0 is January)
console.log(date.getDate()); // Current day of the month (1-31)
console.log(date.getDay()); // Current day of the week (0-6, where 0 is Sunday)
console.log(date.getHours()); // Current hour (0-23)
console.log(date.getMinutes()); // Current minutes (0-59)
console.log(date.getSeconds()); // Current seconds (0-59)
console.log(date.toJSON()); // JSON representation of the date
console.log(date.toLocaleString()); // Date in a locale-specific format

//declaring a date object with a specific date
let myDate = new Date(2025, 0, 1); // January 1, 2025 (months are 0-indexed
console.log(myDate); // Specific date object
console.log(myDate.toString()); // String representation of the specific date

let anotherDate = new Date(2025, 0, 1, 12, 5, 3); // January 1, 2025, at 5: 30 PM");
console.log(anotherDate.toLocaleString()); // Locale-specific format of the specific date

let dateFromString = new Date("2025-01-01");
console.log(dateFromString.toLocaleString); // Date object from a string 

//TIMESTAMPS
let timestamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970
console.log(timestamp); // Current timestamp
console.log(Date.now()); // Current timestamp in milliseconds

let newDate = new Date()
console.log(newDate); // Current date and time
console.log(newDate.getMonth()); 
console.log(newDate.getDay()); // Current day of the week (0-6, where 0 is Sunday)

newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
    }
)
