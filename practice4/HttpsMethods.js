// HTTPS METHODS
// 1. GET  (TO FETCH THE DATA)                         // mostly used
// 2.POST   (TO POST MEANS SEND THE REQUEST)           // mostly used
// 3. PUT    ( PUT MEANS  PUT SOME DATA IN THE SERVER)
// 4.PATCH    (-)
// 5.DELETE    (delete )
const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}:${req.url} New  request Recivied\n`;
  const myUrl = url.parse(req.url, true);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("home page"); //HTTP method OF GET is used
        break;
      case "/about":
        const username = myUrl.query.myname;
        res.end(`I am in the ${username}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end("here are you search for" + search);
        break;
      case "/signup":
        if (req.method === "GET")
          res.end("This is a signup page"); //HTTP method OF GET is used
        else if (req.method === "POST") {
          //HTTP method OF POST is used
          // DB query
          res.end("Sucess");
        }

      default:
        res.end("404 not found");
    }
  });
});

myServer.listen(8000, () => console.log("server started "));
