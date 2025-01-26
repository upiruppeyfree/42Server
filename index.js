const express = require("express");
const cors = require("cors");
const { json } = require("express");
const bodyParser = require("body-parser");
// Routes


const Randomrouter = require("./routes/randomNumberRoutes");
const Authrouter = require("./routes/authRoutes");
const connection = require("./Config/db");
const adminrouter = require("./routes/adminRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(json());
app.use(bodyParser.json());

// Routes middleware
app.use("/random-number", Randomrouter);
app.use("/admin", adminrouter);
app.use("/auth", Authrouter);


app.listen(PORT || 3000 ,async()=>{
  try {
      await connection
      console.log("server is running")
      
  } catch (error) {
      console.log(error)
  }
})
