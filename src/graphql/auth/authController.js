import models from "../../database/models"
import passwordValidator from "../../utils/passwordValidator"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = models.User

export const login = async (data) => {
    let user = await User.findOne({where: {username: data.username}})
    if (user) {
        let match = await bcrypt.compare(data.password, user.password)
        if (match) {
            const token = jwt.sign({username: user.username}, process.env.JWT_SECRET)
            return {
                user: user,
                token: token
            }
        } else {
            throw Error("Wrong username or password.")
        }
    } else {
        throw Error("Wrong username or password.")
    }
}

export const register = async (data) => {
    const valid = passwordValidator.validate(data.password)
    if (valid) {
        const user = await User.create(data)
        console.log(process.env.JWT_SECRET)
        const token = jwt.sign({username: user.username}, process.env.JWT_SECRET)
        return {
            user: user,
            token: token
        }
    } else {
        throw Error("Password should contain at least 6 characters, " +
            "1 digit, 1 uppercase letter and has no spaces")
    }
}




