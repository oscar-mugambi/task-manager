const express = require("express");
// by requiring the file, the file runs and mongoose connects to the database
require("./db/mongoose");
const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");
const app = express();

const port = process.env.PORT;

//parses incoming json to an obj
app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
