import Validator from "password-validator";

export default new Validator()
    .is().min(6)
    .has().digits().min(1)
    .has().uppercase().min(1)
    .has().not().spaces()


