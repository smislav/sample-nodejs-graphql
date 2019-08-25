import generalSchema from "./general/generalSchema"
import userSchema from "./user/userSchema"
import {mergeTypes} from "merge-graphql-schemas"
import {buildSchema} from "graphql"

const schemas = [
    generalSchema,
    userSchema
]

const mergedSchema = mergeTypes(schemas, {all: true})

export default buildSchema(mergedSchema)
