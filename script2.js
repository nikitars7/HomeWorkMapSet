let map = new Map();

map.set("name", "John");

let keys = [...map.keys()]

// Error: keys.push is not a function
// Помилка: keys.push - це не функція
keys.push("more");

console.log(keys)