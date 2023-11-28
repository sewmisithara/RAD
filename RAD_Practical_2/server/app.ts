import fs from "fs";

function greet(name :String) :String {
    return `Hello ${name}`;

}

console.log(greet("Javascript"));

fs.writeFileSync("test.txt", "test");