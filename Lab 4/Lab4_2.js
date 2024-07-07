const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi");
document.write(fruits);

document.write("\n");

const fruit = ["Banana", "Orange", "Apple", "Mango"];

fruit.pop();
document.write(fruit);
document.write("\n");

document.write("-----------------------------------------");

const vehicle = ["car", "bike", "plane", "space craft"];

vehicle.shift();
document.write(vehicle);
document.write("\n");

document.write("-----------------------------------------");

const human = ["ear", "nose", "hand", "leg"];

human.unshift();
document.write(human);
document.write("\n");

document.write("-----------------------------------------");

const livings = ["i", "dog", "cow", "them"];

const animal = livings.slice(1,3);
document.write(livings);
document.write("\n");

document.write("-----------------------------------------");

const animals = ["dog", "cow", "buffalo", "donkey"]

animals.splice(2, 0, "harsil", "yadav")
document.write(animals);