import models from "../../../database/models"

const User = models.User

export const getUserByID = async (data) => {
    return User.findByPk(data.id)
}
