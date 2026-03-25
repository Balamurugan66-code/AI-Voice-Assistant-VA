import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token" })
    }

    const token = authHeader.split(" ")[1]

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

    req.userId = verifyToken.id

    next()

  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: "Invalid token" })
  }
}

export default isAuth