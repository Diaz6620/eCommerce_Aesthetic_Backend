const express = require('express')
const app = express()

require('dotenv').config()

const cors = require('cors')


app.use(cors())
app.use(express.json())



app.listen(process.env.PORT, () => console.log(`Server listen on port: ${process.env.PORT}`))