const { error } = require("console");
const fs = require("fs");

//  with help of Os i can know how many cpus thread pool i used maximum not more than that mention in ur pc
// const os = require("os")
// console.log(os.cpus().length);

//Snycronous
// fs.writeFileSync("./sync.txt","Welcome in the Synchronous file")

//Asyncronous
//  fs.writeFile("./Async.txt" ,"welcome in the Asyncronous",(error)=>{ })

//  const result = fs.readFileSync("./sync.txt","utf-8")
//  console.log(result);

// fs.readFile("./Async.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log(result);
//   }
// });

// Append
// fs.appendFileSync("./sync.txt",`Namaste Node\n`)

//copy
fs.copyFileSync("./sync.txt", "./copy.txt");
