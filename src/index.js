import environment from "dotenv"
import express from "express"
import bodyParser from "body-parser"
import graphql from "express-graphql"
import authResolver from "./graphql/auth/authResolver"
import apiResolver from "./graphql/api/apiResolver"
import authSchema from "./graphql/auth/authSchema";
import apiSchema from "./graphql/api/apiSchema";
import {authorize} from "./utils/authorization";

environment.config()

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/auth', graphql({
    schema: authSchema,
    rootValue: authResolver,
    graphiql: true
}));
app.use('/api', authorize, graphql({
    schema: apiSchema,
    rootValue: apiResolver,
    graphiql: true
}));

app.listen(8080)
console.log("Server started on port " + 8080)
