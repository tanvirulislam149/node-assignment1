const express = require('express')
const cors = require("cors")
const userRouter = require("./routes/v1/user.route")
const errorHandler = require('./middleware/errorHandler')


const app = express()
const port = 3000

// middleware
app.use(cors())
app.use(express.json())


// Routes 
app.use("/api/v1/user", userRouter)


app.get('/', (req, res) => {
  res.send('Hello World!')
})


// Error handler middleware
app.use(errorHandler)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// For the errors express can't handle
process.on("unhandledRejection", (error) => {
  console.log(error.name, error.message);
  app.close(() => {
    process.exit(1);
  });
});