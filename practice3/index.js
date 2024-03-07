const { log } = require("console");
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}:${req.url} New  request Recivied\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home page");
        break;
        case "/about":
        res.end(" I am in the about page");
        break;
      default:
        res.end("404 not found");
    }
    res.end("hello server  again ");
  });
});

myServer.listen(8001, () => console.log("server started "));
