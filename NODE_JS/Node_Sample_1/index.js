const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/") {
    res.end("This is Home page");
  } else if (req.url === "/about") {
    res.end("This is about page");
  } else if (req.url === "/contact") {
    res.end("This is contact page");
  } else if (req.url === "/cars") {
    res.end("<h1>This is car page</h1>");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 error page. Page does not exist</h1>");
  }
});
server.listen(8000, "localhost", () => {
  console.log("Hello World");
  console.log("Server is running on http://localhost:8000");
}); 

