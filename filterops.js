//Filter - A filter operation that returns a new array with all elements that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// The filter method creates a new array with all elements that pass the test implemented by the provided function.
// It does not modify the original array and can be chained with other array methods.

//Example with normal function
function isEven(num) {
    return num % 2 === 0;
}
const oddNumbers = numbers.filter(isEven);
console.log(oddNumbers); // Output: [2, 4, 6, 8, 10]

//Example of Library
const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { title: 'You Don’t Know JS', author: 'Kyle Simpson' },
    { title: 'Python Crash Course', author: 'Eric Matthes' }
];
const jsBooks = books.filter((book) => book.title.includes('JavaScript'));
console.log(jsBooks); // Output: [{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' }, { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' }, { title: 'You Don’t Know JS', author: 'Kyle Simpson' }]
