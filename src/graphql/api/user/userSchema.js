import userType from "./userType"
import {mergeTypes} from "merge-graphql-schemas"

const schema = `    
    type Query {
        getUserById(id: Int!): User
    }  
    
    type Mutation {
        ignore: String
    }  
`

const types = [
    userType,
    schema
]

const mergedSchema = mergeTypes(types, {all: true})

export default mergedSchema
