import userType from "../api/user/userType"
import authType from "./authType"
import {mergeTypes} from "merge-graphql-schemas";
import {buildSchema} from "graphql"

const schema = `     
    type Query {
        ignore: String
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        register(email: String!, username: String!, password: String!): Auth
    }  
`

const types = [
    userType,
    authType,
    schema
];

const mergedSchema = mergeTypes(types, {all: true})

export default buildSchema(mergedSchema)
