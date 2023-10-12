// Create web server
// 1. Create a web server
// 2. Listen for incoming requests
// 3. Parse the request
// 4. Check if the request is for comments
// 5. If it is, then read the comments from the file
// 6. Send the comments back to the client

// 1. Create a web server
const express = require("express");
const app = express();

// 2. Listen for incoming requests
// app.listen(3000);
app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// 3. Parse the request
app.use(express.urlencoded({ extended: true }));

// 4. Check if the request is for comments
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// 5. If it is, then read the comments from the file
app.post("/", function (req, res) {
  let comment = req.body.comment;
  let name = req.body.name;
  let email = req.body.email;
  let phone = req.body.phone;

  console.log(comment);
  console.log(name);
  console.log(email);
  console.log(phone);

  // 6. Send the comments back to the client
  res.send("Thank you for your comment.");
});