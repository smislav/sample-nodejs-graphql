import generalType from "./generalType"
import {mergeTypes} from "merge-graphql-schemas"

const schema = `    
    type Query {
        getApiVersion: Version
    }
    
    type Mutation {
        ignore: String
    }  
`

const types = [
    generalType,
    schema
]

const mergedSchema = mergeTypes(types, {all: true})

export default mergedSchema
