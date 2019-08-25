import jwt from "jsonwebtoken"

const handleAuthorizationMissing = (req, res) => {
    let response = {
        message: "Authorization missing."
    }
    res.status(401).json(response)
}

const handleAuthorizationFailed = (req, res) => {
    let response = {
        message: "Authorization failed."
    }
    res.status(401).json(response)
}

export const authorize = (req, res, next) => {
    console.log("Verifying utils")
    let token = req.headers.authorization
    if (token) {
        try {
            req.token = jwt.verify(token, process.env.JWT_SECRET)
            next()
        } catch (e) {
            handleAuthorizationFailed(req, res)
        }
    } else {
        handleAuthorizationMissing(req, res)
    }
}

