//it uses callback functions (fn which have no name)

const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

coding.forEach(function(language) {
    console.log(language)
})

//similarly, we can use arrow function
coding.forEach((language) => {
    console.log(language)
})

//or we can use named function
function printLanguage(language) {
    console.log(language);
}
coding.forEach(printLanguage);

// The forEach method executes a provided function once for each array element.
// It does not return a value, and it cannot be used to break out of the loop
// like a traditional for loop. It is primarily used for side effects, such as logging or modifying elements.

const mycoding = [{
    language: 'JavaScript',
    level: 'Advanced'
}, {
    language: 'Python',
    level: 'Intermediate'
}, {
    language: 'Java',
    level: 'Beginner'
}]

mycoding.forEach((item) => {
    console.log(`Language: ${item.language}, Level: ${item.level}`);
})