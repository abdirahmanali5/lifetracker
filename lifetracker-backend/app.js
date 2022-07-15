
const { NotFoundError } = require("./utils/errors")
const authRoutes = require("./routes/auth")
const security = require("./middleware/security")
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
// const storeRoute = require("./routes/store")
// const orderRoute = require("./routes/order")
const nutritionRoute = require("./routes/nutrition")
const app = express()

// enable cross-origin resource sharing for all origins for all requests
// NOTE: in production, we'll want to restrict this to only the origin
// hosting our frontend.
app.use(cors())
// parse incoming requests with JSON payloads
app.use(express.json())
// log requests info
app.use(morgan("tiny"))
app.use(security.extractUserFromJwt)

app.use("/auth", authRoutes)
 app.use("/nutrition",nutritionRoute)

app.get("/", (req,res,next) => {
    res.json({})
})
// app.use("/store", storeRoute)
// app.use("/orders", orderRoute)
/** Handle 404 errors -- this matches everything */
app.use((req, res, next) => {
  return next(new NotFoundError())
})

/** Generic error handler; anything unhandled goes here. */
app.use((err, req, res, next) => {
  const status = err.status || 500
  const message = err.message

  return res.status(status).json({
    error: { message, status },
  })
})

module.exports = app;