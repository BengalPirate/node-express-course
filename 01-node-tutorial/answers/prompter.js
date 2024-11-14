const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1].replace(/\+/g, " "); // Replacing '+' with space
    });
    callback(resultHash);
  });
};

// Array to store each guestbook entry
let guestbookEntries = [];

// Updated form to collect name and message
const form = () => {
  let entriesHTML = guestbookEntries
    .map((entry) => `<p><strong>${entry.name}:</strong> ${entry.message}</p>`)
    .join("");
  return `
  <body>
    <h1>Guestbook</h1>
    <form method="POST">
      <label for="name">Name:</label>
      <input name="name" required></input><br><br>
      <label for="message">Message:</label>
      <input name="message" required></input><br><br>
      <button type="submit">Submit</button>
    </form>
    <h2>Entries</h2>
    ${entriesHTML || "<p>No entries yet.</p>"}
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // Add new entry to guestbook
      if (body["name"] && body["message"]) {
        guestbookEntries.push({
          name: body["name"],
          message: body["message"],
        });
      }
      // Redirect to the homepage
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.listen(3000);
console.log("The server is listening on port 3000.");
