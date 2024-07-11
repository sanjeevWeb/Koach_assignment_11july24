require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./database/index.js')
const app = express();
const textRouter = require('./routes/text.route')


//essential middleware to decode/parse request body
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//connecting db
connectDB(process.env.MONGODB_URI)

//router middleware
app.use('/api/v1', textRouter)

app.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})