const express = require("express")
const dotenv=require("dotenv").config();
const {errorHand}=require("./middleware/errorMiddle")
const goalRouter=require("./routes/goalRoutes")
const userRouter=require("./routes/userRoutes")

const {connectDB}=require("./config/db")

const port=process.env.PORT || 5000 
connectDB()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',goalRouter)
app.use('/api/users',userRouter)

app.use(errorHand)

app.listen(port,()=>{console.log(`server is listening on port ${port}...`)})