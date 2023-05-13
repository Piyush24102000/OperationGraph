const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const app = express()
const schema = require('./schema')
const resolver = require('./resolver')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')

async function caller() {
    
    app.use(cors())

    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDb Connected")

    app.use('/graphql', graphqlHTTP({
        schema,
        rootValue: resolver,
        graphiql: true
    }))
    app.get('/',(req,res) => {
        return res.send('Hello Main Page')  
    })
    app.listen(5000, () => console.log("Server started on port 5000"))
}
caller()
