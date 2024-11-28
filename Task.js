const fs = require("fs");
const http = require("http");
const path = require("path");

// Read the main HTML file
const a = fs.readFileSync("./Bubble effect/demo.html");
const b = fs.readFileSync("./Text Effect/index.html");

const serv = http.createServer((req, res) => {
  if (req.url === "/") {
    // Serve the main HTML page
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(a);
  } else if (req.url === "/about") {
    // Serve the about page
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(b);
  } else if (req.url === "/contact") {
    // Serve the contact page
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("<h1>Contact Page</h1>");
  } else {
    // Serve static files (like images, CSS, JS)
    const filePath = fs.existsSync(path.join(__dirname, "Bubble effect", req.url))
    ? path.join(__dirname, "Bubble effect", req.url)
    : path.join(__dirname, "Text Effect", req.url);  
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // File not found or other error
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("<h1>404 - File Not Found</h1>");
      } else {
        // Detect content type based on file extension
        const ext = path.extname(filePath);
        let contentType = "text/plain";
        if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
        else if (ext === ".png") contentType = "image/png";
        else if (ext === ".gif") contentType = "image/gif";
        else if (ext === ".css") contentType = "text/css";
        else if (ext === ".js") contentType = "application/javascript";

        // Serve the static file
        res.writeHead(200, { "Content-Type": contentType });
        return res.end(data);
      }
    });
  }
});

serv.listen(2000, "localhost", () =>
  console.log("Connected to the server at http://localhost:2000")
);
