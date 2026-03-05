const express = require("express");
require("dotenv").config();
const cors = require("cors");
const users = require("./users.json");


const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.get("/contact", (req, res) => {
  res.json({
    message: "You can contact us using the following details",
    email: "support@example.com",
    phone: "+91-9876543210",
    address: "New Delhi, India"
  });
});

app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Users fetched successfully",
    data: users
  });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
