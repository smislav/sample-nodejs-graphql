import generalResolver from "./general/generalResolver"
import userResolver from "./user/userResolver"

const resolver = {
    ...generalResolver,
    ...userResolver
}

export default resolver
